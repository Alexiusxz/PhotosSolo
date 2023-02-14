/* eslint-disable arrow-body-style */
const React = require('react');

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/Inter.css" />

        <link rel="stylesheet" href="css/Like-Button-for-PanelBear-Analytics.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />

        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous" />
        {/* <script defer src="bootstrap/js/bootstrap.min.js" /> */}
        <script defer type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" />
        <script defer src="js/views/bold-and-dark.js" />
        <script defer src="js/script.js" />
        <title>Пикча</title>
      </head>
      <body style={{ backgroundColor: '#2d2c38' }}>
        {children}
      </body>
    </html>
  );
};

module.exports = Layout;
