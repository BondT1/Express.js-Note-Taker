const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    console.info
})
