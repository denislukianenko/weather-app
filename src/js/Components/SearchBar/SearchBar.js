import Component from "../../framework/Component";
import favIcon from "../../../img/fav.svg";
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
        <img src="${favIcon}" alt="Fav Button Icon" />
      </button>
      <button class="search-button" type="button">
        <img src="${searchIcon}" alt="Search Button Icon" />
      </button>
    </section>
    `;
  }
}
