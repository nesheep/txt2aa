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


def txt2img(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str = "black",
) -> Image.Image:
    img = Image.new("RGBA", (1, 1))
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(fontpath, fontsize)
    x, y = draw.textsize(txt, font)
    x, y = int(x + fontsize * 0.2), int(y + fontsize * 0.2)
    img = Image.new("RGBA", (x, y), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    draw.text((x / 2, y / 2), txt, color, font, "mm")
    return img


def img2aa(
    img: Image.Image,
    numy: int,
    fontpath: str,
    str_list: list[str],
) -> list[list[str]]:
    img_x, img_y = img.size
    gray_img = img.convert("L")
    gray_img = gray_img.resize((int(img_x * numy / img_y), numy))
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
    x, y = size
    cel_x = x / max([len(r) for r in aa])
    cel_y = y / len(aa)
    font = ImageFont.truetype(fontpath, int(cel_y * exp))
    for aa_row, r in zip(aa, range(len(aa))):
        for aa_str, c in zip(aa_row, range(len(aa_row))):
            if aa_str:
                xy = (cel_x * (c + 0.5), cel_y * (r + 0.5))
                draw.text(xy, aa_str, color, font, "mm")
    return img


def txt2aa(
    txt: str,
    fontpath: str,
    fontsize: int,
    aa_font: str,
    numy: int,
    str_list: list[str],
) -> str:
    img = txt2img(txt, fontpath, fontsize)
    aa = img2aa(img, numy, aa_font, str_list)
    return "\n".join(["".join(row) for row in aa])


def txt2aa_img(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str,
    aa_font: str,
    numy: int,
    exp: float,
    str_list: list[str],
) -> Image.Image:
    img = txt2img(txt, fontpath, fontsize)
    aa = img2aa(img, numy, aa_font, str_list)
    return aa2img(aa, img.size, aa_font, exp, color)
