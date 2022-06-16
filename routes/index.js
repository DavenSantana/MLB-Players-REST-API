const express = require('express');

const secondpageRoute = require('./secondpage');
const thirdpageRoute = require('./thirdpage');

const router = express.Router();

module.exports = () => {
  
    router.get('/', (req, res) => {
        res.render('index');
    });
  

    router.use('/secondpage', secondpageRoute());
    router.use('/thirdpage', thirdpageRoute());

    return router;
};