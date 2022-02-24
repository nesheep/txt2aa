from __future__ import annotations

import sys
from pathlib import Path


def resource_path(relative_path: str | Path) -> Path:
    base_path = getattr(sys, "_MEIPASS", str(Path(__file__).absolute().parent))
    return Path(base_path) / relative_path
