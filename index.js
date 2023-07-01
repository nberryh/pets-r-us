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
const mongoose = require('mongoose');
const Customer = require('./models/customer');

const app = express();

const CONN = 'mongodb+srv://nberryh:iT2K_5_HBPzX82N@cluster0.wmphxtw.mongodb.net/';
const PORT = process.env.PORT || 3000;

// Renders the index.ejs view
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/grooming', (req, res) => {
    res.render('grooming');
});

app.get('/boarding', (req, res) => {
    res.render('boarding');
});

app.get('/training', (req, res) => {
    res.render('training');
});

app.get('/registration', (req, res) => {
    res.render('registration');
})


app.post('/registration', (req, res) => {
    const { customerId, email } = req.body;

    const newCustomer = new Customer({ customerId, email });

    newCustomer.save((err) => {
        if (err) {
            console.error(err);
            res.redirect('/registration');
        } else {
            res.render('/');
        }
    });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(CONN, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.error(err));
