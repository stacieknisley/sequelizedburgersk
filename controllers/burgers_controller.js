// #### Controller setup
// 1. Inside your`burger` directory, create a folder named`controllers`.
// 2. In`controllers`, create the`burgers_controller.js` file.
// 3. Inside the`burgers_controller.js` file, import the following:
//    * Express
//     * `burger.js`
// 4. Create the`router` for the app, and export the`router` at the end of your file.

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");




// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        // var rs = {
        //     burgers: data
        // };
        // console.log(hbsObject);
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers/post", function (req, res) {
    burger.create([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;