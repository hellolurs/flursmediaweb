const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

//to use .html format instead of .ejs
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.render('index', {route: 'home'});
});

app.get('*', (req, res) => {
  res.redirect('/');
  // res.status(404).send('404 - NOT FOUND');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
