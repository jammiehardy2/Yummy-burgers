var orm = require("./config/orm.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

// Console log all the party_name's.
orm.select("party_name", "parties");

// Console log all the client_name's.
orm.select("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");

orm.selectWhere("clients", "client_name", "Vincent");

// Console log all the clients and their parties.
orm.leftJoin(
  ["client_name", "party_name"],
  "clients",
  "parties",
  "id",
  "client_id"
);

//cats example
// var express = require("express");

// var PORT = process.env.PORT || 8080;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
});