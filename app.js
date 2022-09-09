const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const connect = require("./config/connections");
const app = express();
const routes = require("./routes/company");

connect();

const PORT = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use("/api", routes);
app.listen(PORT, () => console.log("Server is running"));

module.exports = app;
