import Component from "../../framework/Component";
import { weatherSymbols } from "../../data/weatherSymbols";

import HI from "heat-index";

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    if (!this.props.cod) {
      return "";
    }

    return `
      <section class="current-weather-section">
        <div class="weather-symbol-col weather-type-${this.props.weather[0].main.toLowerCase()}">
          <img src="${
            weatherSymbols[this.props.weather[0].main]
          }" class="weather-symbol" />
          <p class="weather-description">
            ${this.props.weather[0].description}
          </p>
        </div>
        <div class="weather-info-col">
          <div class="weather-info-row">
            <p class="weather-value-descr">
              Feels like
              <span class="semi-transperent">
                (actually it's <span class="celsius-type-value">${this.props.main.temp
                  .toFixed(1)
                  .replace(/\.0+$/, "")}°</span>
                <span class="fahrenheit-type-value">${HI.toFahrenheit(
                  this.props.main.temp.toFixed(1).replace(/\.0+$/, "")
                )}°</span>)
              </span>
            </p>
          </div>
          <div class="weather-info-row row-large">
            <b class="weather-value celsius-type-value">${HI.heatIndex({
              temperature: this.props.main.temp,
              humidity: this.props.main.humidity
            })
              .toFixed(1)
              .replace(/\.0+$/, "")}°</b>
            <b class="weather-value fahrenheit-type-value">${HI.toFahrenheit(
              HI.heatIndex({
                temperature: this.props.main.temp,
                humidity: this.props.main.humidity
              })
            )
              .toFixed(1)
              .replace(/\.0+$/, "")}°</b>
            <button
              id="calsius-button"
              class="unit-switch celsius-button"
              type="button"
            >
              C
            </button>
            <button
              id="fahrenheit-button"
              class="unit-switch fahrenheit-button"
              type="button"
            >
              F
            </button>
          </div>
          <div class="weather-info-row">
            <p class="weather-value-descr">
              With wind be like
            </p>
          </div>
          <div class="weather-info-row row-medium">
            <b class="weather-value celsius-type-value">${
              this.props.wind.speed
            }m/s</b>
            <b class="weather-value fahrenheit-type-value">${this.props.wind
              .speed * 3.281}ft/s</b>
          </div>
          <div class="weather-info-row">
            <p class="weather-value-descr">
              And humidity of
            </p>
          </div>
          <div class="weather-info-row row-medium">
            <b class="weather-value">${this.props.main.humidity}%</b>
          </div>
        </div>
      </section>
    `;
  }
}
