'use strict'


const express = require('express');
const router = express.Router();
// const $ = require('jquery')

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[environment];
const knex = require('knex')(knexConfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login/details', function(req, res, next) {
  console.log("logged it!")
  res.render('login', {
    data:'Login Details'
  })

});


module.exports = router;
