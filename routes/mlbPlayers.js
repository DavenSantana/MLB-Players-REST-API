const express = require("express");

const router = express.Router();

module.exports = () => {
    
    router.get("/", (req, res) => {
        return res.render("mlbPlayers");
    });

    router.post("/createMLBPlayer", (req, res) => {

    });

    router.post("/deleteMLBPlayer", (req, res) => {

    });

    return router;
};