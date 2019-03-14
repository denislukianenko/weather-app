export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this._render();
  }
  _render() {
    this.host.innerHTML = "";
    const content = this.render();

    if (typeof content === "string") {
      this.host.innerHTML = content;
    } else {
      content
        .map(item => this._vDomPrototypeElementToHtmlElement(item))
        .forEach(htmlElement => {
          this.host.appendChild(htmlElement);
        });
    }
  }

  _vDomPrototypeElementToHtmlElement(element) {
    // Only Process Components and Tags, No strings
    if (typeof element !== "object") return;
    if (!element.tag) return;

    if (typeof element.tag === "function") {
      // TYPE Component
      let container = document.createElement("div");
      new element.tag(container, element.props);
      this._assignDomAttributes(element, container);
      return container.children[0]; // A weird way to insert Component without div wrapper
    } else {
      // TYPE Tag String
      const container = document.createElement(element.tag);
      if (element.content) {
        container.innerHTML = element.content;
      }
      this._assignDomAttributes(element, container);
      this._processEventHandlers(element, container);
      this._processChildren(element, container);
      return container;
    }
  }
  _processChildren(element, container) {
    if (element.children) {
      element.children.forEach(el => {
        const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
        container.appendChild(htmlElement);
      });
    }
  }
  _processEventHandlers(element, container) {
    if (element.eventHandlers) {
      Object.keys(element.eventHandlers).forEach(eventType => {
        container.addEventListener(eventType, element.eventHandlers[eventType]);
      });
    }
  }
  _assignDomAttributes(element, container) {
    // ensure following element properties are Array
    ["classList", "attributes", "children"].forEach(item => {
      if (element[item] && !Array.isArray(element[item])) {
        element[item] = [element[item]];
      }
    });
    if (element.classList) {
      container.classList.add(...element.classList);
    }
    if (element.attributes) {
      element.attributes.forEach(attributeSpec => {
        container.setAttribute(attributeSpec.name, attributeSpec.value);
      });
    }
  }
}
