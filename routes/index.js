const express = require('express');

const app = express();

const notesRouter = require('./notes');

app.use('/notes', notes);

module.exports = app;