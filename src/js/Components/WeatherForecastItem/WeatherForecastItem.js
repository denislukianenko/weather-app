import Component from "../../framework/Component";
import weatherSymbolSun from "../../../img/weather-symbols/sun.svg";
import weatherSymbolCloudy from "../../../img/weather-symbols/cloudy.svg";

export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  get weatherSymbols() {
    return {
      Sun: weatherSymbolSun,
      Cloudy: weatherSymbolCloudy
    };
  }

  getHoursMinutesFromDate(date) {
    return `${date.getHours() < 10 ? " " : ""}${date.getHours()}:${
      date.getMinutes() < 10 ? " " : ""
    }${date.getMinutes()}`;
  }

  render() {
    console.log(this.props);
    return `
      <div class="future-weather-mini-card">
        <b class="card-time">${this.getHoursMinutesFromDate(
          this.props.date
        )}</b>
        <img src="${
          this.weatherSymbols[this.props.weatherType]
        }" class="card-symbol" />
        <b class="card-temp">
          <span class="celsius-type-value">${this.props.celsiusValue}°C</span>
          <span class="fahrenheit-type-value">${
            this.props.fahrenheitValue
          }°F</span>
        </b>
      </div>
    `;
  }
}
