var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

const db = require('../db/js/dbquery');

// Redirects to myPage
router.get('/myPage', (req, res, next) => {
  let logged = req.session.id;
  console.log(req.session);
  if (logged) {
    db.getBlogPosts(logged)
      .then((results) => {
        console.log(results);
        res.render('myPage', {
          results
        })
      })
  } else {
    res.render('partials/login');
  }
});

//redirects to editblog
router.get('/editblog/:id', (req, res, next) => {
  knex('blogs')
    .where('id', req.params.id)
    .first()
    .then((results) => {
      console.log("Editblog redirect hit");
      res.render('partials/editblog', {
        results
      })
    })
})

// Editing blog
router.patch('/editBlog/:id', (req, res, next) => {

  knex('blogs')
    .where('id', req.params.id)
    .update({
      post: req.body.blogPost
    })
    .then((results) => {

      res.sendStatus(200);
    })
    .catch((err) => {
      console.log((err));
    })
})


// Adds blog to database
router.post('/myPage', (req, res, next) => {
  let logged = req.session.id;
  let blog = req.body.blogPost;
  let userID = req.session.id;

  if (logged) {
    db.insertBlog(blog)
      .then((blogID) => {
        db.insertIDJoinBlogsTable(blogID, userID)
          .then((userBlogIDs) => {
            console.log("This is adding a blog post" + userBlogIDs);
            db.getBlogPosts(logged)
              .then((results) => {
                console.log(results);
                res.render('myPage', {
                  results
                })
              })
          })
      })
  } else {
    res.render('partials/login');
  }
});

//Deleting a post
router.delete('/myPage/:id', (req, res, next) => {
  let blogID = req.params.id;
  console.log("hitting delete route " + blogID);
  db.deleteBlog(parseInt(blogID))
    .then((results) => {
      console.log(results);
      db.deleteBlogPost(results[0])
        .then((postID) => {
          res.render('myPage')
        }).catch((error)=>{
          console.log('error');
        })
    })
})


module.exports = router;
