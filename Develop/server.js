let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;
const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  //`res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname + '/public/index.html');
});


app.get('/notes', (req, res) => {
  //`res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname + '/public/notes.html');
});

app.get('/db/db', (req, res) => {
  res.sendFile(__dirname + '/db/db.json');
  
});

app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});