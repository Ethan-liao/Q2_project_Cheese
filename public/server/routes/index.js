'use strict'

const express = require('express');
const router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

const db = require('../db/js/dbquery');

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
    data: 'Login Details'
  })
});

// Redirects to myPage
router.get('/myPage', function(req, res, next) {
  res.render('myPage')
});

// Redirects to the registeration page
router.get('/registeration', (req, res, next) => {
  res.render('partials/registeration')
})

// Redirects to success page
router.get('/success', (req, res, next) => {
  res.render('partials/success');
})


// Inserts into database
router.post('/signup', (req, res, next) => {
  console.log(req.body);
  console.log(req.body.news[1]);
  db.insertUserInfo(req.body)
    .then((results) => {
      console.log(results);
      res.render('myPage', {
        data:results
      })
      console.log("read passed the render myPage");
    })
    .catch((err)=>{
      if (err){
        return next(err);
      };
    })
  });


module.exports = router;
