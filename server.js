var express = require("express");
var exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
  console.log("listening on " + PORT);
});
