require('@babel/register');
const React = require('react');

const ReactDOMServer = require('react-dom/server');

const renderComponent = (component, props = {}, response) => {
  props.user = response?.locals.user; // добавляем имя пользователя в пропсы, по ключу username, для компонента Layout

  const reactElement = React.createElement(component, props);

  const markup = ReactDOMServer.renderToStaticMarkup(reactElement);

  response.send(`<!DOCTYPE html>${markup}`);
};
module.exports = renderComponent;
