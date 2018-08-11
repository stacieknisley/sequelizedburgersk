// #### Controller setup
// 1. Inside your`burger` directory, create a folder named`controllers`.
// 2. In`controllers`, create the`burgers_controller.js` file.
// 3. Inside the`burgers_controller.js` file, import the following:
//    * Express
//     * `burger.js`
// 4. Create the`router` for the app, and export the`router` at the end of your file.

var express = require("express");
var db = require("../models/");

var router = express.Router();

// /  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷+++++++++++++++++++++++++++++  
//  * Remove your old ORM file, as well as any references to it in 
//  * `burgers_controller.js`.
//  * Replace those references with Sequelize's ORM methods.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Import the model (cat.js) to use its database functions.
//var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.burger.findAll().then(function (dbBurger) {
        var hbObject = { burger: dbBurger };
        return res.render("index", hbObject);
    });
});

router.post("/api/burgers/post", function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name
    }).then(function (dbBurger) {
        res.redirect("/");
    })
});


router.put("/api/burgers/:id", function (req, res) {


    db.burger.update({
        devoured: true
    }, {
            where: {
                id: req.body.burger_id
            }
        }
    ).then(function (dbBurger) {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;