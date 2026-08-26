# Object Archive Gallery

A small, dependency-free browser gallery that presents five local images as a
responsive slideshow. Every slide includes a title, description, and price.

## Features

- Previous and next slide buttons
- Automatic playback with play/pause control
- Reset button to return to the first slide
- Dot navigation and image thumbnails
- Fullscreen gallery mode
- Arrow-key navigation and spacebar playback toggle
- Accessible labels, live playback status, and visible keyboard focus

## Run locally

The project is static and does not need a build step. From this directory, run
a local server so the image paths behave consistently:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser, then use the controls below the
main image to navigate the collection.

## Customize the collection

Edit the `items` array near the top of `main.js`. Each entry has a title,
description, and price. Image files are read from `img/0.jpg` through
`img/4.jpg`, so keep the array order aligned with those filenames or update
the `imagePath` function.

## Project files

- `index.html` contains the gallery structure and controls.
- `main.js` manages slide state, navigation, autoplay, and fullscreen mode.
- `style.css` provides the responsive visual design.
- `img/` contains the local gallery images.
