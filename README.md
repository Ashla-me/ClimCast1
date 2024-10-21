# ClimCast - Weather Forecast App

## Overview
ClimCast is a web-based weather forecasting application that provides users with up-to-date weather information for cities around the world. With real-time data fetched from the WeatherAPI, ClimCast offers accurate current weather conditions and a two-day forecast. The app is intuitive and easy to use, making it ideal for anyone seeking weather updates at their fingertips.

## Features
- **City-based Weather Search:** Users can enter a city name to retrieve its current weather and forecast.
- **Real-time Weather Data:** Fetches real-time weather conditions, including temperature, weather condition, and an icon for easy visualization.
- **Two-day Forecast:** Provides a short-term weather forecast for better planning.
- **Error Handling:** Alerts users if the entered city is not found.

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

```python
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/submit_city', methods=['POST'])
def submit_city():
    city = request.form.get('city')
    return redirect(url_for('get_weather', city=city))

@app.route('/weather/<city>')
def get_weather(city):
    api_key = '442d038d4f21480a8f5155320240606'
    url = f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&days=2&aqi=no&alerts=no"
    response = requests.get(url)
    weather_data = response.json()
    
    if 'error' not in weather_data:
        weather = {
            'city': weather_data['location']['name'],
            'country': weather_data['location']['country'],
            'temperature': weather_data['current']['temp_c'],
            'condition': weather_data['current']['condition']['text'],
            'icon': weather_data['current']['condition']['icon'],
            'forecast': weather_data['forecast']['forecastday']
        }
        return render_template('result.html', weather=weather)
    else:
        return render_template('home.html', error='City not found')
```

## Installation and Setup
To run ClimCast locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone <https://github.com/Ashla-me/ClimCast1>
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
