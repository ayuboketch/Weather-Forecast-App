import "./styles.css";
const cityNameInput = document.getElementById("location-input");

async function getInformation(cityName) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=5FCESRUPVX3JFBZJ33F62RP3B&contentType=json`
        );
        const data = await response.json();
        console.log({ status: "Success", data: data.address });
        const result = {
            address: data.address,
            temp: data.currentConditions.temp,
            humidity: data.currentConditions.humidity,
            windspeed: data.currentConditions.windspeed,
            conditions: data.currentConditions.conditions, // Add conditions if needed
        };
        return result;
    } catch (error) {
        console.log("Error", error);
        return null;
    }
}

document
    .getElementById("getWeather")
    .addEventListener("click", async function (event) {
        event.preventDefault();

        const cityName = cityNameInput.value.trim();
        if (cityName.length === 0) {
            alert("Please input the name of a city");
        } else {
            const data = await getInformation(cityName);
            if (data) {
                document.querySelector(
                    ".city"
                ).textContent = `Weather in ${data.address}`;
                document.querySelector(".temp").textContent = `${data.temp}°C`;
                document.querySelector(
                    ".humidity"
                ).textContent = `Humidity: ${data.humidity}%`;
                document.querySelector(
                    ".wind"
                ).textContent = `Wind Speed: ${data.windspeed} km/h`;
                document.querySelector(
                    ".description"
                ).textContent = `${data.conditions}`;
            } else {
                alert(
                    "Failed to retrieve weather information. Please try again."
                );
            }
        }
    });

let counter = 1; // Counter to track the number of apps created
let app2Displayed = false; // Track whether app2 is displayed

document.getElementById("plus1").addEventListener("click", () => {
    // Only change app2 display style once
    if (!app2Displayed) {
        document.getElementById("app2").style.display = "grid";
        app2Displayed = true; // Set flag to true so the display style isn't changed again
    }

    // Create a new div element for the new app
    const newAppDiv = document.createElement("div");
    newAppDiv.classList.add(`app${counter}`);
    newAppDiv.id = `app${counter}`;

    // Set the inner HTML for the new app
    newAppDiv.innerHTML = `
        <div class="app${counter}" id="app${counter}">
            <div class="search">
                <header>
                    <h1>Weather App ${counter}</h1>
                </header>
                <form id="location-form">
                    <input
                        id="location-input"
                        type="text"
                        placeholder="Enter city name"
                        autofocus
                    />
                    <button id="getWeather" class="getWeather">
                        Get Weather
                    </button>
                </form>
            </div>
            <div class="weather">
                <h2 class="city">Weather in Dhaka</h2>
                <h1 class="temp">51°C</h1>
                <div class="flex">
                    <img
                        src="https://openweathermap.org/img/wn/04n.png"
                        alt="Cloudy"
                        class="icon"
                    />
                    <div class="description">Cloudy</div>
                </div>
                <div class="details">
                    <div class="humidity">Humidity: 50%</div>
                    <div class="wind">Wind speed: 6.2 km/h</div>
                </div>
            </div>
        </div>
    `;

    // Append the newly created element to the app2 container
    document.getElementById("app2").appendChild(newAppDiv);

    // Increment the counter for the next element
    counter++;
});

// document.getElementById("plus1").addEventListener("click", () => {
//     console.log(alert("pressed!"));
// });
