# CV

One-page multilingual CV for Nikos Zevgolis, available in English, Greek, and French. The project details are based on the portfolio at [nzevgolisda.github.io](https://nzevgolisda.github.io/).

## Featured Projects

- [Portfolio](https://nzevgolisda.github.io/) - personal data science portfolio.
- [tox.gr-frontend](https://github.com/nzevgolisda/tox.gr-frontend) - frontend for an instant-messaging web app with social-media and forum features.
- [science-tools](https://github.com/nzevgolisda/science-tools) - reusable Python and JavaScript modules for scientific computing.
- [Games](https://github.com/nzevgolisda/Games) - board games and casual old-school shooters.
- [slides.js](https://github.com/nzevgolisda/slides.js) - JavaScript slides with descriptions and carousel navigation.
- [spreadsheets](https://github.com/nzevgolisda/spreadsheets) - Python methods for working with Excel files.

## Requirements

Install the common LaTeX packages first:

- `pdflatex` for the English CV
- `xelatex` and `polyglossia` for the Greek and French CVs
- Source Sans Pro and Font Awesome 5

On Debian or Ubuntu, install the English build:

```bash
sudo apt install texlive-latex-base
sudo apt install texlive-fonts-extra
```

Install the Greek language support:

```bash
sudo apt install texlive-xetex
sudo apt install texlive-lang-greek
```

Install the French language support:

```bash
sudo apt install texlive-xetex
sudo apt install texlive-lang-french
```

`polyglossia`, Source Sans Pro, Font Awesome 5, and the remaining shared packages are included in `texlive-full` if a complete installation is preferred.

## Build

Run the script from this directory:

```bash
bash ./build.sh
```

The script is location-independent, so it can also be called by path from another directory:

```bash
bash /path/to/cv.tex/build.sh
```

Source files:

- `cv.tex` - English, built with `pdflatex`
- `cv.el.tex` - Greek, built with `xelatex`
- `cv.fr.tex` - French, built with `xelatex`

The script creates three dated, one-page A4 PDFs:

- `cv.zevgolis-nikolaos.YYYYMMDD.pdf` (English)
- `cv.zevgolis-nikolaos.el.YYYYMMDD.pdf` (Greek)
- `cv.zevgolis-nikolaos.fr.YYYYMMDD.pdf` (French)

Generated PDFs and LaTeX auxiliary files are ignored by Git.

All portfolio, repository, email, phone, LinkedIn, and GitHub labels in the PDFs are clickable. Web links open in the default browser through the PDF viewer.
