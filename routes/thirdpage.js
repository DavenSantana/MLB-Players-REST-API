const express = require('express');

const router = express.Router();

module.exports = () => {
    
    router.get('/', (req, res) => {
        return res.send('Third Page');
    });

    return router;
};