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

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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

app.get('/customer-list', (req, res) => {
    Customer.find()
        .then((customers) => {
            res.render('customer-list', { customers });
        })
        .catch((err) => {
            console.error(err);
            res.render('/');
        });
});

app.get('/appointment', (req, res) => {
    const services = require('./public/data/services.json').services;
    res.render('appointment', { services  });
});

app.post('/registration', (req, res) => {
    const { customerId, email } = req.body;

    const newCustomer = new Customer({ 
        customerId: customerId,
        email: email
    });

    newCustomer.save()
        .then(() => {
            console.log('Customer saved successfully');
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/registration');
        });
});

app.post('/appointment', (req, res) => {
    const { username, lastName, email, service } = req.body;

    const newAppointment = new Appointment({
        userName,
        firstName,
        lastName,
        email,
        service
    });

    newAppointment.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/appointment');
        });
});

mongoose.connect(CONN, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.error(err));
