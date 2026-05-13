#!/usr/bin/env python
"""Slice sprite-sheet-like PNGs into per-icon crops.

Designed for images like Icon_2.png/Icon_3.png where icons are placed on a
uniform background (e.g. black) with clear gaps between them.

Algorithm:
- Build a foreground mask by thresholding away the background.
- Find contiguous occupied ranges along X (columns) and Y (rows).
- For each row/column cell, compute the tight bounding box of foreground pixels
  and crop with optional padding.

Usage (from repo root or techsi/):
  python techsi/scripts/slice_icons.py techsi/src/assets/Icon_2.png techsi/src/assets/Icon_3.png

Outputs:
  techsi/src/assets/sliced/<stem>/<stem>_r<row>_c<col>.png
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Sequence, Tuple


def _import_deps():
    try:
        from PIL import Image  # type: ignore
    except Exception as exc:  # pragma: no cover
        raise SystemExit(
            "Missing dependency: pillow. Install with: pip install pillow"
        ) from exc

    try:
        import numpy as np  # type: ignore
    except Exception as exc:  # pragma: no cover
        raise SystemExit(
            "Missing dependency: numpy. Install with: pip install numpy"
        ) from exc

    return Image, np


@dataclass(frozen=True)
class Run:
    start: int
    end: int  # inclusive

    @property
    def length(self) -> int:
        return self.end - self.start + 1


def _find_runs(occupied: "Sequence[bool]", min_len: int) -> List[Run]:
    runs: List[Run] = []
    in_run = False
    run_start = 0
    for idx, val in enumerate(occupied):
        if val and not in_run:
            in_run = True
            run_start = idx
        elif not val and in_run:
            in_run = False
            run_end = idx - 1
            if run_end - run_start + 1 >= min_len:
                runs.append(Run(run_start, run_end))
    if in_run:
        run_end = len(occupied) - 1
        if run_end - run_start + 1 >= min_len:
            runs.append(Run(run_start, run_end))
    return runs


def _tight_bbox(mask, x0: int, x1: int, y0: int, y1: int) -> Tuple[int, int, int, int] | None:
    # Returns bbox in full-image coordinates (left, top, right, bottom) inclusive.
    sub = mask[y0 : y1 + 1, x0 : x1 + 1]
    if not sub.any():
        return None

    ys, xs = sub.nonzero()
    left = x0 + int(xs.min())
    right = x0 + int(xs.max())
    top = y0 + int(ys.min())
    bottom = y0 + int(ys.max())
    return left, top, right, bottom


def slice_icons(
    input_path: Path,
    output_root: Path,
    threshold: int = 20,
    padding: int = 6,
) -> List[Path]:
    Image, np = _import_deps()

    img = Image.open(input_path)
    rgb = img.convert("RGB")
    arr = np.asarray(rgb)

    # Foreground mask: any channel above threshold.
    mask = (arr[:, :, 0] > threshold) | (arr[:, :, 1] > threshold) | (arr[:, :, 2] > threshold)

    h, w = mask.shape

    # Occupancy projections.
    x_occ = mask.any(axis=0)
    y_occ = mask.any(axis=1)

    min_x_run = max(12, int(w * 0.06))
    min_y_run = max(12, int(h * 0.06))

    x_runs = _find_runs(list(x_occ), min_x_run)
    y_runs = _find_runs(list(y_occ), min_y_run)

    # Fallback: if projection fails (e.g., all icons touch), use single run.
    if not x_runs:
        x_runs = [Run(0, w - 1)]
    if not y_runs:
        y_runs = [Run(0, h - 1)]

    stem = input_path.stem
    out_dir = output_root / stem
    out_dir.mkdir(parents=True, exist_ok=True)

    saved: List[Path] = []

    for r_idx, yrun in enumerate(y_runs, start=1):
        for c_idx, xrun in enumerate(x_runs, start=1):
            bbox = _tight_bbox(mask, xrun.start, xrun.end, yrun.start, yrun.end)
            if bbox is None:
                continue
            left, top, right, bottom = bbox

            left = max(0, left - padding)
            top = max(0, top - padding)
            right = min(w - 1, right + padding)
            bottom = min(h - 1, bottom + padding)

            crop = img.crop((left, top, right + 1, bottom + 1))
            out_path = out_dir / f"{stem}_r{r_idx}_c{c_idx}.png"
            crop.save(out_path)
            saved.append(out_path)

    return saved


def _parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Slice icon sprites into per-icon PNGs")
    parser.add_argument(
        "inputs",
        nargs="+",
        type=Path,
        help="Input PNG files (e.g., techsi/src/assets/Icon_2.png)",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path("techsi/src/assets/sliced"),
        help="Output directory root (default: techsi/src/assets/sliced)",
    )
    parser.add_argument(
        "--threshold",
        type=int,
        default=20,
        help="Foreground threshold (0-255). Pixels > threshold are kept.",
    )
    parser.add_argument(
        "--padding",
        type=int,
        default=6,
        help="Padding (px) around tight bounding boxes.",
    )
    return parser.parse_args(argv)


def main(argv: Sequence[str] | None = None) -> int:
    args = _parse_args(argv)

    out_root = args.out
    out_root.mkdir(parents=True, exist_ok=True)

    all_saved: List[Path] = []
    for input_path in args.inputs:
        if not input_path.exists():
            raise SystemExit(f"Input not found: {input_path}")
        saved = slice_icons(
            input_path=input_path,
            output_root=out_root,
            threshold=args.threshold,
            padding=args.padding,
        )
        all_saved.extend(saved)
        print(f"{input_path.name}: saved {len(saved)} icon(s) -> {out_root / input_path.stem}")

    if all_saved:
        print("\nSaved files:")
        for p in all_saved:
            print(p.as_posix())

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
