require ('dotenv').config();

const express = require('express');



exports.getIndex = (req, res) => {
    res.render('index');
};

exports.getMisOnTeadus = (req, res) => {
    res.render('../views/Bioloogia_uurimisvaldkond/Mis_on_teadus');
};
