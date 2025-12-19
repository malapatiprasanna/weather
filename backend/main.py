from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search"
WEATHER_URL = "https://api.open-meteo.com/v1/forecast"


@app.get("/weather")
def weather(city: str = Query(...)):
    geo = requests.get(GEOCODE_URL, params={
        "name": city,
        "count": 1
    }).json()

    if "results" not in geo:
        return {"error": "City not found"}

    lat = geo["results"][0]["latitude"]
    lon = geo["results"][0]["longitude"]

    weather = requests.get(WEATHER_URL, params={
        "latitude": lat,
        "longitude": lon,
        "current_weather": True,
        "hourly": "relativehumidity_2m",
        "timezone": "auto"
    }).json()

    return {
        "city": city,
        "temperature": weather["current_weather"]["temperature"],
        "windspeed": weather["current_weather"]["windspeed"],
        "humidity": weather["hourly"]["relativehumidity_2m"][0],
        "weathercode": weather["current_weather"]["weathercode"],
        "is_day": weather["current_weather"]["is_day"]
    }
