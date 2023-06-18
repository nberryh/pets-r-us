/*
===========================================
; Title:  index.js
; Author: Nolan Berryhill
; Date:   18 June 2023
; Description: JavaScript for index.js
;==========================================
*/

"use strict";

// Set value to the variables
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Renders the index.ejs view
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/grooming', (req, res) => {
    res.render('grooming');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${port}`);
})