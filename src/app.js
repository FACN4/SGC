const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const routes = require('./routes/index');
const helpers = require('./helpers/index.js');
const bodyParse = require('body-parser');
const app = express();
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.set('port', process.env.PORT || 3000);
app.use(routes);

app.use(express.static('public'));

module.exports = app;
