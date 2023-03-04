const indexController = require("../controllers/indexController")



const express = require("express")

module.exports = function(app){

    app.route('/index')
    .get(indexController.getIndex);


    app.route('/Mis_on_teadus')
    .get(indexController.getMisOnTeadus);

 }