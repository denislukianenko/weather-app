export function createElement(tag, config, ...args) {
  //config -{}props args-children
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  const arrayChildren = hasChildren ? [].concat(...args) : [];
  props.children = arrayChildren
    .filter(item => item != null && item !== false) //except falsy values
    .map(item => (item instanceof Object ? item : createTextElement(item))); //convert every child that is not element
  return {
    tag,
    props
  };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, {
    nodeValue: value
  });
}
