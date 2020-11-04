const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

  let today = new Date();
  let currentDay = today.getDay();
  let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = week[currentDay];

  res.render("list", { day });

});



app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
