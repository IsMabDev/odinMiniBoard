require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const { router: myRoutes } = require("./routes/homeRoutes");
const newRoutes = require("./routes/newRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/index", myRoutes);
app.get("/", (req, res) => res.redirect("/index"));
app.use("/new", newRoutes);
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
