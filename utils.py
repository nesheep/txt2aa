from __future__ import annotations
from pathlib import Path
import sys


def resource_path(relative_path: str | Path) -> str:
    base_path = getattr(sys, "_MEIPASS", str(Path(__file__).absolute().parent))
    return str(Path(base_path) / relative_path)
