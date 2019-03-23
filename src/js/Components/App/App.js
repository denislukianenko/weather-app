import Component from "../../framework/Component";
import { SearchBar } from "../SearchBar";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";

import WeatherDataService from "../../services/WeatherDataService";
import AppState from "../../services/AppState";

export default class App extends Component {
  constructor(host) {
    super(host);
    AppState.watch("WEATHER", this.updateMyself);
  }

  init() {
    this.logWeather = this.updateWeather.bind(this);
    this.updateMyself = this.updateMyself.bind(this);

    this.state = {};
    WeatherDataService.getCityData(this.updateWeather);
  }

  updateWeather(data) {
    AppState.update("WEATHER", data);
  }

  updateMyself(subState) {
    console.log("Apdated App with", subState);
    this.updateState(subState);
  }

  render() {
    return [
      {
        tag: SearchBar,
        props: {
          initValue: this.state.cityString || ""
        }
      },
      {
        tag: CurrentWeather,
        props: this.state.weather
      },
      {
        tag: WeatherForecast,
        props: this.state.forecast
      }
    ];
  }
}
