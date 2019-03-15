class WeatherDataService {
  getLastCity(onCityGotCallback, onWeatherGotCallback) {
    if (localStorage.getItem("last-cities")) {
      onCityGotCallback(
        JSON.parse(localStorage.getItem("last-cities"))[0],
        onWeatherGotCallback
      );
    } else {
      fetch("http://ip-api.com/json/?fields=18", { mode: "cors" })
        .then(response => response.json())
        .then(cityData => {
          this.addNewCityToLocalStorage(cityData);
          onCityGotCallback(
            JSON.parse(localStorage.getItem("last-cities"))[0],
            onWeatherGotCallback
          );
        });
    }
  }

  addNewCityToLocalStorage(cityData) {
    let cityString = `${cityData.city},${cityData.countryCode}`;
    let citiesArray = [];
    if (localStorage.getItem("last-cities")) {
      citiesArray = JSON.parse(localStorage.getItem("last-cities"));
    }
    citiesArray.unshift(cityString);
    citiesArray.length > 5 ? citiesArray.pop() : null;
    localStorage.setItem("last-cities", JSON.stringify(citiesArray));
  }

  getCurrentWeather(cityString, onWeatherGotCallback) {
    console.log(cityString);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Kyiv,UA&appid=67b0a7dc27ce0bfee6e818b778ba623a"
    )
      .then(response => response.json())
      .then(weather => onWeatherGotCallback(weather));
  }
  getWeatherForecast() {
    let currentDate = new Date();
    return [
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      },
      {
        date: currentDate,
        weatherType: "Cloudy",
        celsiusValue: 3,
        fahrenheitValue: 37
      }
    ];
  }
}

export default new WeatherDataService();
