class WeatherDataService {
  getCurrentWeather() {
    return {
      weatherType: "Cloudy",
      weatherDescr: "Scattered Clouds",
      celsiusValue: 3,
      fahrenheitValue: 37,
      celsiusActualValue: 6,
      fahrenheitActualValue: 43,
      windMeterValue: 4,
      windFeetValue: 13,
      humidityValue: 79
    };
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
