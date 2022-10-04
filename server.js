const express = require("express");
const cookieSession = require("cookie-session");
const path = require("path");
const routes = require("./routes");
const app = express();

const port = 3000;

app.set("trust proxy", 1);

app.use(cookieSession({
    name: "session",
    keys: ["rt3o4i34ert", "tneornt498enlgf"]
}));

app.use(express.static(path.join(__dirname, "./")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(routes()); 

app.listen(port, () => {
    console.log(`Listening on Port:${port}`)
});
