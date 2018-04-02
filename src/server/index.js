const express = require('express');

const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;

const expressHandlebars = require('express-handlebars');
// const hbsHelpers = require('./helpers/handlebars');
const hbs = expressHandlebars.create({
  extname: '.hbs',
  // helpers: hbsHelpers,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

app.use('/public', express.static(path.join(__dirname, '../../dist')));

app.get('/favicon.ico', (req, res) => {
  res.status(200).set({ 'Content-Type': 'image/x-icon' }).send();
});

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Spark listening on port 3000!');
});
