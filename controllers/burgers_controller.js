// Requiring our Todo model
let db = require("../models");
const debug = require('debug')('app');
// Routes
// =============================================================
module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Burger
            .findAll({})
            .then(function (results) {
                console.log(results);

                res.render('index', { burger: results });
            })
    });
    app.get('/api/burgers', function (req, res) {
        db.Burger
            .findAll({})
            .then(function (results) {
                res.json(results);
            })
    });
    app.post('/api/burgers', function (req, res) {
        db.Burger
            .create(req.body)
            .then(function (results) {
                res.json(results);
            });

    });
    app.put("/api/burgers/:id", function (req, res) {
        console.log(req.params.id)
        db.Burger
            .update(
                req.body,
                { where: { id: req.params.id } })
            .then(function (results) {
                res.json(results);
            });

    });


}