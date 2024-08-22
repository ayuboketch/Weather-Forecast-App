<img width="1680" alt="Screenshot 2024-08-22 at 19 12 34" src="https://github.com/user-attachments/assets/a1f81319-bcac-483a-876c-37f67099c666">

#Weather App 🌦️

This is a simple and interactive Weather App that allows users to search for the current weather conditions of any city in the world. The app provides information such as temperature, humidity, wind speed, and weather conditions using data fetched from the Visual Crossing Weather API.
Features

    🌍 Search for any city: Enter a city name to get the current weather information.
    🌡️ Weather details: The app provides temperature, humidity, wind speed, and weather conditions for the selected city.
    ➕ Multiple Weather Widgets: You can dynamically add new weather widgets by pressing the "Add" button to create a new weather search section.
    ⏳ Loading Indicator: Displays a loading spinner while the app fetches weather data.

Technologies Used

    HTML5
    CSS3
    JavaScript (ES6+)
    Visual Crossing Weather API

Getting Started

    Clone the repository:

    bash

git clone https://github.com/your-username/weather-app.git

Navigate to the project directory:

bash

    cd weather-app

    Open the project:
    Open the index.html file in your browser.

API Setup

This app uses the Visual Crossing Weather API. To get started:

    Sign up at Visual Crossing to get your free API key.
    Replace the API_KEY placeholder in app.js with your actual API key:

    javascript

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=YOUR_API_KEY&contentType=json`);

How It Works

    Weather Search: Enter a city name in the input field and click "Get Weather". The app will display the current weather details for the specified city.
    Add Weather Widget: Click the "+" button to add a new weather widget that allows you to search for weather conditions of additional cities.
    Loading Spinner: The app shows a loading spinner while fetching data from the API to improve user experience.

Future Improvements

    Add more details like hourly and weekly forecasts.
    Enhance the UI/UX for mobile responsiveness.
    Integrate more APIs for additional weather data.

Screenshots

Include screenshots of your app here
License

This project is open-source and available under the MIT License.
