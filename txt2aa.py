from typing import Any

import numpy as np
from PIL import Image, ImageDraw, ImageFont

from constants import D

FONT = "C:/Windows/Fonts/msgothic.ttc"
STRS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz +-*/%'\"!?#&()~^|@;:.,[]{}<>_0123456789"


def __make_map(str_list: list[str]) -> Any:
    l = []
    font = ImageFont.truetype(FONT, 40)
    for i in str_list:
        img = Image.new("L", (20, 20), "white")
        draw = ImageDraw.Draw(img)
        draw.text((0, 0), i, font=font)
        l.append(np.asarray(img).mean())
    l_as = np.argsort(l)
    lenl = len(l)
    l256 = np.r_[np.repeat(l_as[:-(256 % lenl)], 256 // lenl),
                 np.repeat(l_as[-(256 % lenl):], 256 // lenl + 1)]
    return np.array(str_list)[l256]


def txt2img(
    txt: str,
    size: tuple[int, int] = D.IMG_SIZE,
) -> Image.Image:
    img = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(FONT, 200)
    x, y = size
    draw.text((x / 2, y / 2), txt, (0, 0, 0), font, "mm")
    return img


def img2aa(
    img: Image.Image,
    str_list: list[str] = list(STRS),
) -> list[list[str]]:
    img_x, img_y = img.size
    gray_img = img.convert("L")
    gray_img = gray_img.resize((img_x // 10, img_y // 10))
    img_arr = np.asarray(gray_img)
    chr_map = __make_map(str_list)
    aa = chr_map[img_arr]
    aa = aa.tolist()
    return aa


def aa2img(
    aa: list[list[str]],
    size: tuple[int, int] = D.IMG_SIZE,
) -> Image.Image:
    img = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(FONT, 10)
    x, y = size
    cel_x = x / max([len(r) for r in aa])
    cel_y = y / len(aa)
    for r in range(len(aa)):
        aa_row = aa[r]
        for c in range(len(aa_row)):
            xy = (cel_x * (c + 0.5), cel_y * (r + 0.5))
            draw.text(xy, aa_row[c], (0, 0, 0), font, "mm")
    return img
