import Component from "../../framework/Component";
import searchIcon from "../../../img/search.svg";

export default class SearchBar extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return `
    <section class="search-section">
      <input
        autofocus
        placeholder="Enter City Name"
        class="search-input"
        type="text"
        name="city"
        id="city-input"
      />
      <button class="search-button" type="button">
        <img src="${searchIcon}" alt="Search Button Icon" />
      </button>
    </section>
    `;
  }
}
