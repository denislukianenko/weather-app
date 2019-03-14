import Component from "../../framework/Component";
import { WeatherForecastItem } from "../WeatherForecastItem/";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  get weatherForecastItems() {
    return this.props.forecastObj.map(forecastObj => {
      return {
        tag: WeatherForecastItem,
        props: forecastObj
      };
    });
  }

  render() {
    return [
      {
        tag: "section",
        classList: ["future-weather-section"],
        children: [
          { tag: "h2", content: "Weather till " + this.props.weatherTill },
          {
            tag: "div",
            classList: ["future-weather-cards-wrapper"],
            children: [
              {
                tag: "div",
                classList: ["future-weather-cards"],
                children: this.weatherForecastItems
              }
            ]
          }
        ]
      }
    ];
  }
}
