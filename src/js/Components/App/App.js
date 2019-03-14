import Component from "../../framework/Component";
import { SearchBar } from "../SearchBar";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import WeatherDataService from "../../services/WeatherDataService";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  get currentObj() {
    return [];
  }

  render() {
    return [
      {
        tag: SearchBar,
        props: {
          initValue: "Kyiv, UA"
        }
      },
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
}
