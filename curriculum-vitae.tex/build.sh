#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

pdflatex -interaction=nonstopmode -halt-on-error cv.tex
pdflatex -interaction=nonstopmode -halt-on-error cv.tex

date_stamp="$(date +%Y%m%d)"
english_output="cv.zevgolis-nikolaos.${date_stamp}.pdf"
mv cv.pdf "$english_output"

xelatex -interaction=nonstopmode -halt-on-error cv.el.tex
xelatex -interaction=nonstopmode -halt-on-error cv.el.tex

greek_output="cv.zevgolis-nikolaos.el.${date_stamp}.pdf"
mv cv.el.pdf "$greek_output"

xelatex -interaction=nonstopmode -halt-on-error cv.fr.tex
xelatex -interaction=nonstopmode -halt-on-error cv.fr.tex

french_output="cv.zevgolis-nikolaos.fr.${date_stamp}.pdf"
mv cv.fr.pdf "$french_output"
printf 'Built %s, %s, and %s\n' "$english_output" "$greek_output" "$french_output"
