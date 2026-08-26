from pathlib import Path

import folium


LANDMARKS = [
	("Syntagma Square", 37.9755, 23.7348, "Central square and the Greek Parliament."),
	("Panathenaic Stadium", 37.9686, 23.7410, "The marble stadium of the first modern Olympic Games."),
	("National Garden", 37.9732, 23.7366, "A green retreat beside Syntagma Square."),
	("Stavros Niarchos Foundation Cultural Center", 37.9420, 23.6896, "Cultural center and waterfront park in Kallithea."),
	("Piraeus Port", 37.9475, 23.6380, "Athens' historic harbor and gateway to the islands."),
]

WONDERS = [
	("Acropolis", 37.9715, 23.7257, "UNESCO-listed hilltop citadel overlooking Athens."),
	("Parthenon", 37.9715, 23.7267, "The fifth-century BCE temple dedicated to Athena."),
	("Temple of Olympian Zeus", 37.9693, 23.7331, "Monumental ancient temple near the Acropolis."),
	("Ancient Agora", 37.9755, 23.7213, "The civic heart of classical Athens."),
]

DISTRICT_PLACES = [
	("Plaka", 37.9730, 23.7298, "Historic lanes, neoclassical houses, and small tavernas."),
	("Monastiraki", 37.9763, 23.7256, "Market streets and a lively square beneath the Acropolis."),
	("Psyrri", 37.9781, 23.7248, "A compact nightlife and food district."),
	("Koukaki", 37.9664, 23.7215, "A walkable neighborhood south of the Acropolis."),
	("Kolonaki", 37.9786, 23.7410, "Central district known for galleries, cafes, and shopping."),
	("Exarcheia", 37.9860, 23.7334, "Independent bookstores, cafes, and street art."),
	("Pangrati", 37.9678, 23.7500, "Local restaurants, galleries, and neighborhood squares."),
	("Glyfada", 37.8629, 23.7543, "Seaside district on the southern Athens Riviera."),
]


def add_places(layer, places, color, icon):
	"""Add named places to a Folium layer and return their coordinates."""
	coordinates = []
	for name, latitude, longitude, description in places:
		folium.Marker(
			location=[latitude, longitude],
			tooltip=name,
			popup=folium.Popup(
				f"<strong>{name}</strong><br>{description}",
				max_width=280,
			),
			icon=folium.Icon(color=color, icon=icon, prefix="fa"),
		).add_to(layer)
		coordinates.append([latitude, longitude])
	return coordinates


def build_map():
	map_view = folium.Map(
		location=[37.974, 23.735],
		zoom_start=12,
		tiles="CartoDB positron",
		control_scale=True,
		attr="Map data © OpenStreetMap contributors, © CARTO",
	)

	landmarks = folium.FeatureGroup(name="Landmarks", show=True)
	wonders = folium.FeatureGroup(name="Wonders", show=True)
	districts = folium.FeatureGroup(name="District places", show=True)

	coordinates = []
	coordinates.extend(add_places(landmarks, LANDMARKS, "blue", "university"))
	coordinates.extend(add_places(wonders, WONDERS, "red", "star"))
	coordinates.extend(add_places(districts, DISTRICT_PLACES, "green", "map-marker"))

	landmarks.add_to(map_view)
	wonders.add_to(map_view)
	districts.add_to(map_view)
	folium.LayerControl(collapsed=False).add_to(map_view)

	map_view.fit_bounds(coordinates, padding=(24, 24))
	return map_view


if __name__ == "__main__":
	output_path = Path(__file__).with_name("home.html")
	build_map().save(output_path)
	print(f"Saved Athens explorer to {output_path}")
