
const express = require('express');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send('Welcome to the product Router');
});

module.exports = productRouter;