// Make a package.json file by running`npm init` from the command line.

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================


// Install the Handlebars npm package: `npm install express-handlebars`.
// Install the Express npm package: `npm install express`.
// 6. Install the body - parser npm package: `npm install body-parser`.
// 7. Install MySQL npm package: `npm install mysql`.

// 2. Copy the contents of your completed assignment from last week.
//    * Remove the older git connection with `rm -R .git`. 
//    * Then connect this folder with a new github repo.
// 3. Run`sequelize init` to create the necessary files.

var expresshandlebars = require("express-handlebars");
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
var hbs = require("handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);
app.use(routes);


db.sequelize
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});