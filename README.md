# ClimCast - Weather Forecast App

## Overview
ClimCast is a web-based weather forecasting application that provides users with up-to-date weather information for cities around the world. With real-time data fetched from the WeatherAPI, ClimCast offers accurate current weather conditions and a two-day forecast. The app is intuitive and easy to use, making it ideal for anyone seeking weather updates at their fingertips.

## Features
- **City-based Weather Search:** Users can enter a city name to retrieve its current weather and forecast.
- **Real-time Weather Data:** Fetches real-time weather conditions, including temperature, weather condition, and an icon for easy visualization.
- **Two-day Forecast:** Provides a short-term weather forecast for better planning.
- **Error Handling:** Alerts users if the entered city is not found or available.

## Technologies Used
- **Frontend:** HTML, CSS
- **Backend:** Python (Flask)
- **API:** WeatherAPI (for real-time weather data)

## How It Works
1. **Homepage:** Users land on a simple homepage where they can input the name of a city.
2. **City Submission:** After submitting the city, the app redirects the user to a weather results page displaying current weather and forecast.
3. **Weather Display:** Information such as temperature, weather condition, and forecast data is displayed, including icons representing weather conditions.
4. **Error Handling:** If a city is not found, the user is redirected back to the homepage with an error message.

## Python Code Implementation
The backend of ClimCast is built using Flask, a lightweight Python web framework. Below is a brief description of the key components of the code:
- **Flask Routing:** The app has three main routes:
  - `/` for the homepage
  - `/submit_city` for handling city form submissions
  - `/weather/<city>` for retrieving and displaying weather data for the specified city.
- **API Integration:** Weather data is fetched from the WeatherAPI using the API key, and the JSON response is parsed to extract relevant information.
- **Templates:** The app uses HTML templates located in the `web_static/templates` directory, with static assets (CSS, icons) stored in `web_static/static`.

## Installation and Setup
To run ClimCast locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashla-me/ClimCast1
   ```

2. Navigate to the project directory:
   ```bash
   cd ClimCast
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash```
   python app.py
   ```

5. Open your browser and go to `http://127.0.0.1:5000/` to use the app.

## Collaborators
This project was developed by:
- Ashlame Sunday
- Avwopiabro Favour
- Temidayo Alabi

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Thank you for using ClimCast. Stay prepared with accurate weather updates!
