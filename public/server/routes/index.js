'use strict'


const express = require('express');
const router = express.Router();
// const $ = require('jquery')

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// Redirects to the login page
router.get('/login/details', function(req, res, next) {
  console.log("logged it!")
  res.render('partials/login', {
    data:'Login Details'
  })

});

// Redirects to myPage
router.get('/myPage', function(req, res, next) {
  res.render('myPage')

});

// Redirects to the registeration page
router.get('/registeration', (req,res,next)=>{
  res.render('partials/registeration')
})

router.post('/signup', (req,res,next)=>{
  console.log(req.body);
  res.render('myPage',{
    name:req.body
  })

})

module.exports = router;
