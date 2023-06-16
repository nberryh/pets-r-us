/*
===========================================
; Title:  index.js
; Author: Nolan Berryhill
; Date:   18 June 2023
; Description: JavaScript for index.js
;==========================================
*/

'use strict';

// Set value to the variables
const express = require('express');
const app = express();
const path = require('path');

// Renders the index.ejs view
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/', (req, res) => {
    res.render('grooming');
});

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})