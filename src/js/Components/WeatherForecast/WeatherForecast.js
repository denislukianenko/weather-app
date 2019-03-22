import Component from "../../framework/Component";
import { WeatherForecastItem } from "../WeatherForecastItem/";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  get weatherForecastItems() {
    if (this.props.list) {
      let result = this.props.list.map((forecastObj, index, arr) => {
        const currentDateText = forecastObj.dt_txt;
        const previousDateText = arr[index - 1] ? arr[index - 1].dt_txt : null;
        let propsObj = Object.assign(forecastObj, {
          shoudHaveDateLabel: this.shouldHaveDayDateLabel(
            currentDateText,
            previousDateText
          )
        });
        return {
          tag: WeatherForecastItem,
          props: propsObj
        };
      });
      result.push({ tag: "div", classList: "spacer" });
      return result;
    }
  }

  shouldHaveDayDateLabel(currentDateText, previousDateText) {
    const currentDate = new Date(currentDateText);
    const previousDate = new Date(previousDateText);
    console.log("Comparing " + currentDateText + " and " + previousDateText);
    if (
      currentDate.getDate() != previousDate.getDate() ||
      previousDateText == null
    ) {
      return true;
    } else {
      return false;
    }
  }

  get forecastTillDate() {
    let date = new Date(this.props.list[this.props.list.length - 1].dt_txt);
    return `${date.toLocaleString("en-us", {
      month: "long"
    })} ${date.getDate()}`;
  }

  render() {
    if (!this.props.cod) {
      return "";
    }
    return [
      {
        tag: "section",
        classList: ["future-weather-section"],
        children: [
          {
            tag: "h2",
            content: "Weather untill " + this.forecastTillDate
          },
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
