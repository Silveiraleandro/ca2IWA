const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const applicationRoutes = require('./routes/nba');


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
// override with different headers; last one takes precedence
app.use(bodyParser.urlencoded())
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
// ROUTES
// Application Routes
app.use('/', applicationRoutes);


module.exports = app;