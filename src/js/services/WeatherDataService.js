import { CONFIG } from "../data/appConfig";

class WeatherDataService {
  getCityData(callBack, cityString) {
    if (cityString) {
      getAllWeatherForCity(cityString, callBack);
      return;
    }
    //If cityString is not defined
    //It tries to define city based on localStorage last city or IP and search that
    if (localStorage.getItem("last-cities")) {
      const lastCity = JSON.parse(localStorage.getItem("last-cities"))[0];
      this.getAllWeatherForCity(lastCity, callBack);
    } else {
      fetch("http://ip-api.com/json/?fields=18", { mode: "cors" })
        .then(response => response.json())
        .then(cityData => {
          this.addNewCityToLocalStorage(cityData);
          const lastCity = JSON.parse(localStorage.getItem("last-cities"))[0];
          this.getAllWeatherForCity(lastCity, callBack);
        });
    }
  }

  getAllWeatherForCity(cityString, callBack) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${
        CONFIG.apiKey
      }&units=metric`
    )
      .then(response => response.json())
      .then(weather => {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityString}&appid=${
            CONFIG.apiKey
          }&units=metric`
        )
          .then(response => response.json())
          .then(forecast => {
            callBack({
              weather: weather,
              forecast: forecast,
              cityString: cityString
            });
          });
      });
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
}

export default new WeatherDataService();
