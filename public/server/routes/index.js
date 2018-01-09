'use strict'

const express = require('express');
const router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

const saltRounds = 10;
const bycrypt = require('bcrypt');

const db = require('../db/js/dbquery');


/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.session);
  let logged = req.session.id;
  if (logged) {
    db.getBlogPosts(logged)
      .then((results) => {
        // console.log(results);
        res.render('index', {
          results
        })
      })
  } else {
    res.render('partials/login')
  }
});


// Redirects to the registeration page
router.get('/registeration', (req, res, next) => {
  // console.log(req.session);
  res.render('partials/registeration')
})

// Redirects to success page
router.get('/success', (req, res, next) => {
  // console.log(req.session);
  res.render('partials/success');
})

// Redirects to the login page
router.get('/login', (req, res, next) => {
  // console.log(req.session);
  res.render('partials/login');
})

// Redirects to the news page
router.get('/news', function(req, res, next) {
  // console.log(req.session);
  let logged = req.session.id;
  if (logged) {
    db.getNewsfromJoin(logged)
      .then((results) => {
        console.log(results);
        res.render('partials/newsPage', {
          results
        })
      })
  } else {
    res.render('partials/login')
  }
});

router.get('/news/api', function(req, res, next) {
  // console.log(req.session);
  let logged = req.session.id;
  if (logged) {
    db.getNewsfromJoin(logged)
      .then((results) => {
        // console.log(results);
        res.json(results)
      })
  } else {
    res.render('partials/login')
  }
});




//logging in
router.post('/login/details', (req, res, next) => {
  req.session.views = (req.session.views || 0) + 1;
  //.body contains forms info
  let name = req.body.username;
  let password = req.body.password;
  knex('users')
    .where('username', req.body.username)
    .first()
    .then((results) => {
      //results contains an object with matching username
      // console.log(results);
      bycrypt.compare(req.body.password, results.hashed_password)
        .then((passwordsMatch) => {
          if (passwordsMatch) {
            req.session.id = results.id;
            // console.log("successfully logged in");
            // console.log(req.session);
            // console.log("the above has been logged");
            db.getBlogPosts(results.id)
              .then((results) => {
                console.log(results);
                res.render('myPage', {
                  results
                })
              })
          } else {
            res.sendStatus(401);
          }
        })

    })
});


// logging out
router.delete('/login', (req, res) => {
  req.session = null;
  res.sendStatus(200);
  // console.log((req.session));
})

// Inserts into database
router.post('/signup', (req, res, next) => {
  let newsInfo = req.body.news;
  let userID = req.body.id;
  bycrypt.hash(req.body.password, saltRounds).then((digest) => {
      db.insertUserInfo(req.body, digest)
        .then((results) => {
          db.insertIdJoinNewsTable(results[0], newsInfo)
            .then((result) => {
              // console.log(results);
              // console.log(req.body);
              //results is username ID
              //username: 'hello',
              // password: '124',
              // password2: '1234',
              // email: 'liao@asdf',
              // news: [ '1', '2' ]
              res.render('partials/login')
            })
        })
    })
    .catch((err) => {
      if (err) {
        return next(err);
      };
    })
});


//Gets news


module.exports = router;
