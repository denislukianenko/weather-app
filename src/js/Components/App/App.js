import Component from "../../framework/Component";
import { SearchBar } from "../SearchBar";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import WeatherDataService from "../../services/WeatherDataService";

export default class App extends Component {
  constructor(host) {
    super(host);
    WeatherDataService.getLastCity(
      this.onCityGotCallback,
      this.onWeatherGotCallback
    );
  }
  get startRenderObj() {
    return [
      {
        tag: SearchBar,
        props: {
          initValue: "Kyiv, UA"
        }
      }
    ];
  }
  get weatherComponents() {
    return [
      {
        tag: CurrentWeather,
        props: WeatherDataService.getCurrentWeather()
      },
      {
        tag: WeatherForecast,
        props: {
          weatherTill: "March 8",
          forecastObj: WeatherDataService.getWeatherForecast()
        }
      }
    ];
  }

  onCityGotCallback(requestString, onWeatherGotCallback) {
    WeatherDataService.getCurrentWeather(requestString, onWeatherGotCallback);
  }

  onWeatherGotCallback(weather) {
    console.log(this); //Undefinded
    // This code is called from another context but I want see here this.render() and others
  }

  render() {
    return this.startRenderObj;
  }
}
