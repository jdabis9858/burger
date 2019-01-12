var express = require("express")
var app = express()

var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT)
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
  
  


