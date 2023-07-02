/*
===========================================
; Title:  customer.js
; Author: Nolan Berryhill
; Date:   02 july 2023
; Description: JavaScript for customer.js
;==========================================
*/

"use strict";

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;