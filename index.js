const express = require("express");
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/client/');
});

app.get('/result/:id', async (req, res) => {
    res.sendFile(__dirname + '/client/result.html');
});

app.listen(process.env.PORT || 3000);