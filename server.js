const express = require('express');
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');
const api = require('./routes/index.js');
const data = require('./db/db.json');
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes'))
})

app.listen(PORT, () => {
    console.log(`API Server situated on PORT: ${PORT}`)
})

