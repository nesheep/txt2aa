from __future__ import annotations

import numpy as np
from PIL import Image, ImageDraw, ImageFont

FONT = "C:/Windows/Fonts/msgothic.ttc"
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
    font_path: str = FONT,
    font_size: int = 200,
) -> Image.Image:
    if not txt:
        return Image.new("RGBA", (100, 100), (255, 255, 255, 0))
    img = Image.new("RGBA", (1, 1))
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(font_path, font_size)
    x, y = draw.textsize(txt, font)
    x, y = int(x + font_size * 0.1), int(y + font_size * 0.1)
    img = Image.new("RGBA", (x, y), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    draw.text((x / 2, y / 2), txt, (0, 0, 0), font, "mm")
    return img


def img2aa(
    img: Image.Image,
    cel_size: int = 10,
    str_list: list[str] = list(STRS),
) -> list[list[str]]:
    img_x, img_y = img.size
    gray_img = img.convert("L")
    gray_img = gray_img.resize((img_x // cel_size, img_y // cel_size))
    img_arr = np.asarray(gray_img)
    chr_map = __make_map(str_list)
    aa = chr_map[img_arr]
    return aa.tolist()


def aa2img(
    aa: list[list[str]],
    size: tuple[int, int],
    font_size: int = 10,
) -> Image.Image:
    img = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(FONT, font_size)
    x, y = size
    cel_x = x / max([len(r) for r in aa])
    cel_y = y / len(aa)
    for r in range(len(aa)):
        aa_row = aa[r]
        for c in range(len(aa_row)):
            xy = (cel_x * (c + 0.5), cel_y * (r + 0.5))
            draw.text(xy, aa_row[c], (0, 0, 0), font, "mm")
    return img


def txt2aa(txt: str) -> list[list[str]]:
    img = txt2img(txt)
    return img2aa(img)


def txt2aa_img(txt: str) -> Image.Image:
    if not txt:
        return Image.new("RGBA", (100, 100), (255, 255, 255, 0))
    img = txt2img(txt)
    aa = img2aa(img)
    return aa2img(aa, img.size)
