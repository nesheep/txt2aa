from __future__ import annotations

import numpy as np
from PIL import Image, ImageDraw, ImageFont

FONT = "msgothic.ttc"
STRS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz +-*/%'\"!?#&()~^|@;:.,[]{}<>_0123456789"


def __make_map(str_list: list[str]) -> np.ndarray:
    l = []
    font_size = 20
    font = ImageFont.truetype(FONT, font_size)
    for i in str_list:
        img = Image.new("L", (font_size * 2, font_size * 2), "white")
        draw = ImageDraw.Draw(img)
        draw.text((font_size, font_size), i, "black", font, "mm")
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
    str_list: list[str] = list(STRS),
) -> list[list[str]]:
    img_x, img_y = img.size
    gray_img = img.convert("L")
    gray_img = gray_img.resize((int(img_x * numy / img_y), numy))
    img_arr = np.asarray(gray_img)
    chr_map = __make_map(str_list)
    aa = chr_map[img_arr]
    return aa.tolist()


def aa2img(
    aa: list[list[str]],
    size: tuple[int, int],
    exp: float,
    color: str = "black",
) -> Image.Image:
    img = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    x, y = size
    cel_x = x / max([len(r) for r in aa])
    cel_y = y / len(aa)
    font = ImageFont.truetype(FONT, int(cel_y * exp))
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
    numy: int,
) -> list[list[str]]:
    img = txt2img(txt, fontpath, fontsize)
    return img2aa(img, numy)


def txt2aa_img(
    txt: str,
    fontpath: str,
    fontsize: int,
    color: str,
    numy: int,
    exp: float,
) -> Image.Image:
    img = txt2img(txt, fontpath, fontsize)
    aa = img2aa(img, numy)
    return aa2img(aa, img.size, exp, color)
