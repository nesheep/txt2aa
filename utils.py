from __future__ import annotations

import re
import sys
from pathlib import Path

from PIL import ImageFont


def resource_path(relative_path: str | Path) -> Path:
    base_path = getattr(sys, "_MEIPASS", str(Path(__file__).absolute().parent))
    return Path(base_path) / relative_path


def isint(s) -> bool:
    return True if re.fullmatch(r"[-+]?\d+", s) else False


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
