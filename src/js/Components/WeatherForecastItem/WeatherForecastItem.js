import Component from "../../framework/Component";
import { weatherSymbols } from "../../data/weatherSymbols";

import HI from "heat-index";

export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  getHoursMinutesFromDate(dateText) {
    let date = new Date(dateText);
    return `${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()}`;
  }

  getDayDateLabel() {
    let date = new Date(this.props.dt_txt);
    console.log(this.props.shoudHaveDateLabel);
    if (this.props.shoudHaveDateLabel) {
      return `<div class="day-date">
      ${date.toLocaleString("en-us", {
        month: "long"
      })} ${date.getDate()}</div>`;
    } else {
      return "";
    }
  }

  render() {
    return `
      <div class="future-weather-mini-card ${
        this.props.shoudHaveDateLabel ? "has-date-label" : ""
      }">
        ${this.getDayDateLabel()}
        <b class="card-time">${this.getHoursMinutesFromDate(
          this.props.dt_txt
        )}</b>
        <img src="${
          weatherSymbols[this.props.weather[0].main]
        }" class="card-symbol" />
        <b class="card-temp">
          <span class="celsius-type-value">${this.props.main.temp
            .toFixed(1)
            .replace(/\.0+$/, "")}°</span>
          <span class="fahrenheit-type-value">${HI.toFahrenheit(
            this.props.main.temp
          )
            .toFixed(1)
            .replace(/\.0+$/, "")}°</span>
        </b>
      </div>
    `;
  }
}
