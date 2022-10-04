const express = require("express");

const kanyequoteRoute = require("./kanyequote");
const restcountriesRoute = require("./restcountries");
const mlbPlayersRoute = require("./mlbPlayers");

const router = express.Router();

module.exports = () => {
  
    router.get("/", (req, res) => {
        res.render("index");
    });
  
    router.use("/kanyequote", kanyequoteRoute());
    router.use("/restcountries", restcountriesRoute());
    router.use("/mlbPlayers", mlbPlayersRoute());

    return router;
};