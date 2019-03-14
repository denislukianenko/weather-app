import Component from "../../framework/Component";
import weatherSymbolCloudy from "../../../img/weather-symbols/cloudy.svg";

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  get weatherSymbols() {
    return {
      Cloudy: weatherSymbolCloudy
    };
  }

  render() {
    return `
      <section class="current-weather-section">
        <div class="weather-symbol-col">
          <img src="${
            this.weatherSymbols[this.props.weatherType]
          }" class="weather-symbol" />
          <p class="weather-description weather-type-scattered-clouds">
            ${this.props.weatherDescr}
          </p>
        </div>
        <div class="weather-info-col">
          <div class="weather-info-row">
            <p class="weather-value-descr">
              Feels like
              <span class="semi-transperent">
                (actually it's <span class="celsius-type-value">${
                  this.props.celsiusActualValue
                }°</span>
                <span class="fahrenheit-type-value">${
                  this.props.fahrenheitActualValue
                }°</span>)
              </span>
            </p>
          </div>
          <div class="weather-info-row row-large">
            <b class="weather-value celsius-type-value">${
              this.props.celsiusValue
            }°</b>
            <b class="weather-value fahrenheit-type-value">${
              this.props.fahrenheitValue
            }°</b>
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
              this.props.windMeterValue
            }m/s</b>
            <b class="weather-value fahrenheit-type-value">${
              this.props.windFeetValue
            }ft/s</b>
          </div>
          <div class="weather-info-row">
            <p class="weather-value-descr">
              And humidity of
            </p>
          </div>
          <div class="weather-info-row row-medium">
            <b class="weather-value">${this.props.humidityValue}%</b>
          </div>
        </div>
      </section>
    `;
  }
}
