require ('dotenv').config();

const express = require('express');



exports.getIndex = (req, res) => {
    res.render('index');
};

