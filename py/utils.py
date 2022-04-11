from __future__ import annotations

import re

from PIL import ImageFont


def isfloat(s) -> bool:
    return True if re.fullmatch(r"[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?", s) else False


def is_valid_font(s) -> bool:
    try:
        font = ImageFont.truetype(s, 10)
        if font:
            return True
    except:
        return False
    return False
