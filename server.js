const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
const debug = require('debug')('app');
const app = express();
// Requiring our models for syncing
let db = require("./models");

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Routes
require("./controllers/burgers_controller.js")(app);
// =============================================================

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});