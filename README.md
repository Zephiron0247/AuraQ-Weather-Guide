# AuraQ 🌦️💨  
AuraQ is a simple and interactive web application that provides **real-time weather**, **AQI (Air Quality Index)**, and **local time/date** for any region entered by the user.  
It also updates the background video dynamically based on the current weather condition (Clear, Rain, Clouds, etc.).

---

## ✅ Features
- 🔍 Search weather by **region/city name**
- 🌡️ Real-time **temperature (°C)**
- 🌫️ Real-time **AQI (Air Quality Index)**
- 🕒 Shows **local time & date** of the searched location
- 🎥 Dynamic background video changes based on weather condition:
  - Clear / Sunny
  - Rain
  - Thunderstorm
  - Clouds
  - Snow
  - Drizzle
- 🔄 Reset button restores the interface without refreshing the page

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **APIs Used**
  - OpenWeatherMap API (Weather + Coordinates)
  - AQICN API (AQI using latitude & longitude)
  - TimeZoneDB API (Local time using latitude & longitude)

---

## 📌 How It Works (Logic)
1. User enters a **city/region name**
2. App calls **OpenWeatherMap API**
   - Fetches temperature and weather condition
   - Extracts latitude & longitude
3. Using coordinates:
   - Calls **AQICN API** to get AQI
   - Calls **TimeZoneDB API** to get local time/date
4. UI displays:
   - Date & Time  
   - Temperature  
   - AQI  
5. Background video changes based on weather condition

---

## ▶️ How To Run the Project
1. Download / clone the repository
2. Keep all files in the **same folder**:
   - `AuraQ.html`
   - `script.js`
   - Images (`Logo.png`, `arrow.png`, `reset.png`, `bg1.jpg`)
   - Videos (`vid1.mp4`, `Sun.mp4`, `Rainy.mp4`, `Windy.mp4`, etc.)
3. Open `AuraQ.html` in a browser

✅ No extra installation is needed since this is a frontend project.

---

## 🔑 API Setup (Important)
This project requires API keys from:
- OpenWeatherMap
- WAQI
- TimeZoneDB

You must paste your own API keys inside `script.js`.

Example (format):
```js
const API_KEY = "YOUR_KEY_HERE";
