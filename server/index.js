const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const serverRoutes = require("./routes/serverRoutes.js");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist/")));

app.use("/server", serverRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
