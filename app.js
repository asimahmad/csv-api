const express = require('express');
const app = express();
const dataRoute = require('./api/data')

// app.use('/', dataRoute);

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "It is from get"
    })
})

app.post('/', (req, res, next) => {
    res.status(200).json({
        message: "It is from post"
    })
})

app.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "It is from delete"
    })
})



module.exports = app