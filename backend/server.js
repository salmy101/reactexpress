const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = 8080; //express usually runs on the same default port as REACT, 300, so change it 


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Sample GET route
app.get("/api/data", (req, res) => {
  // res.send("I am listening!!")
  res.json({
    name: "salma",
    age: 23,
    food: "pizza"
  });
});

app.get("/api/msg", (req, res) => {
  // res.send("I am listening!!")
  res.json({
    msg: "WELCOME TO MY WEBSITE",
  });
});


app.listen(PORT, () => {
  console.log(`Express server listening on port http://localhost:${PORT}`);
});
