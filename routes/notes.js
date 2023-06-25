const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const { readFromFile, readAndAppend, writeToFile, } 
= require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    console.info(`${req.method} request received`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:note_id', (res, req) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.tip_id === tipId);
            return result.length > 0
                ? res.json(result)
                : res.json('No note found with that ID');
        });
});

notes.delete('/:note_id', (res, req) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id !== noteId);
            writeToFile('./db/db.json', result);
            res.json(`Item ${noteId} has now been deleted`);
        })
}); 

notes.post('/', (res, req) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note succesfully added');
    } else {
        res.errored('Error occured when adding note');
    }
    
});

module.exports = notes;


