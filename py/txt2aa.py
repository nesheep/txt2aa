from __future__ import annotations

import numpy as np
from PIL import Image, ImageDraw, ImageFont


def __make_map(
    fontpath: str,
    str_list: list[str],
) -> np.ndarray:
    l = []
    fontsize = 20
    font = ImageFont.truetype(fontpath, fontsize)
    for i in str_list:
        img = Image.new("L", (fontsize * 2, fontsize * 2), "white")
        draw = ImageDraw.Draw(img)
        draw.text((fontsize, fontsize), i, "black", font, "mm")
        l.append(np.asarray(img).mean())
    l_as = np.argsort(l)
    lenl = len(l)
    l256 = np.hstack((
        np.repeat(l_as[:-(256 % lenl)], 256 // lenl),
        np.repeat(l_as[-(256 % lenl):], 256 // lenl + 1),
    ))
    return np.array(str_list)[l256]


def __txt2img_withbg(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str,
    bgpath: str,
) -> Image.Image:
    with Image.open(bgpath) as img:
        draw = ImageDraw.Draw(img)
        font = ImageFont.truetype(fontpath, fontsize)
        w, h = img.size
        draw.text((w / 2, h / 2), txt, color, font, "mm")
        return img


def txt2img(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str = "black",
    bgpath: str = "",
) -> Image.Image:
    if bgpath:
        return __txt2img_withbg(txt, fontpath, fontsize, color, bgpath)
    img = Image.new("RGBA", (1, 1))
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(fontpath, fontsize)
    ax, ay, bx, by = draw.textbbox((0, 0), txt, font)
    w, h = bx - ax, by - ay
    p = fontsize * 0.3
    img = Image.new("RGBA", (int(w + p * 2), int(h + p * 2)), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    draw.text((p - ax, p - ay), txt, color, font)
    return img


def img2aa(
    img: Image.Image,
    numy: int,
    fontpath: str,
    str_list: list[str],
) -> list[list[str]]:
    img_w, img_h = img.size
    gray_img = img.convert("L")
    gray_img = gray_img.resize((int(img_w * numy / img_h), numy))
    img_arr = np.asarray(gray_img)
    chr_map = __make_map(fontpath, str_list)
    aa = chr_map[img_arr]
    return aa.tolist()


def aa2img(
    aa: list[list[str]],
    size: tuple[int, int],
    fontpath: str,
    exp: float,
    color: str = "black",
) -> Image.Image:
    img = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    w, h = size
    cel_w = w / max([len(r) for r in aa])
    cel_h = h / len(aa)
    font = ImageFont.truetype(fontpath, int(cel_h * exp))
    for aa_row, r in zip(aa, range(len(aa))):
        for aa_str, c in zip(aa_row, range(len(aa_row))):
            if aa_str:
                xy = (cel_w * (c + 0.5), cel_h * (r + 0.5))
                draw.text(xy, aa_str, color, font, "mm")
    return img


def txt2aa(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str,
    aa_font: str,
    numy: int,
    str_list: list[str],
    bgpath: str,
) -> str:
    img = txt2img(txt, fontpath, fontsize, color, bgpath)
    aa = img2aa(img, numy, aa_font, str_list)
    return "\n".join(["".join(row) for row in aa])


def txt2aa_img(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str,
    aa_font: str,
    aa_color: str,
    numy: int,
    exp: float,
    str_list: list[str],
    bgpath: str,
) -> Image.Image:
    img = txt2img(txt, fontpath, fontsize, color, bgpath)
    aa = img2aa(img, numy, aa_font, str_list)
    return aa2img(aa, img.size, aa_font, exp, aa_color)
