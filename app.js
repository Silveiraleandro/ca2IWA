const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const applicationRoutes = require('./routes/application');


// MIDDLEWARE IMPORTS
const morgan = require('morgan');
// ROUTER IMPORTS

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'public/views'));

// MIDDLEWARE
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(bodyParser.urlencoded({
    extended: true
}));

// ROUTES
// Application Routes
app.use('/', applicationRoutes);


module.exports = app;