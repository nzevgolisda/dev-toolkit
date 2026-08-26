# Athens Places Explorer

A small Folium project that creates an interactive Athens map with three toggleable layers:

- **Landmarks**: major civic, cultural, and waterfront locations
- **Wonders**: ancient sites and archaeological highlights
- **District places**: neighborhoods and local areas to explore

## Run it

From this folder, install the dependency and generate the map:

```bash
python -m pip install -r requirements.txt
python main.py
```

Open `home.html` in a browser. Use the layer control in the top-right to show or hide categories, then hover or click markers for details.

The generated HTML is self-contained apart from the map tiles loaded by the browser. Edit the place lists in `main.py` to add or move locations, then run the script again.
