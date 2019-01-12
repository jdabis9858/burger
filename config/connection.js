var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "lambo127",
  database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
      console.log("1", err);
      return;
    }
    


    console.log("connected as id " + connection.threadId);
});

module.exports = connection;