var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});




// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }

//       else {
//           console.log("working")
//       }
  
//     });
//   });


// app.post("/", function(req, res) {

//     connection.query("INSERT INTO burgers;")

// });
  
  


