var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

const db = require('../db/js/dbquery');

// Redirects to myPage
router.get('/myPage', (req, res, next)=> {
let logged = req.session.id;
  console.log(req.session);
  if (logged){
    db.getBlogPosts(logged)
    .then((results)=>{
      console.log(results);
      res.render('myPage',{
        results
      })
    })
}else {
  res.render('partials/login');
}
});

//Redirects to newsPage
router.get('/newsPage', (req, res, next)=> {
  console.log(req.session);
  res.render('partials/newsPage')
});

// Adds blog to database
router.post('/myPage', (req, res, next)=> {
  let logged = req.session.id;

  console.log(req.session);
  let blog = req.body.blogPost;

  let userID = req.session.id;

if (logged){
  db.insertBlog(blog)
  .then((blogID)=>{
    db.insertIDJoinBlogsTable(blogID,userID)
    .then((userBlogIDs)=>{
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
}else {
  res.render('partials/login');
}
});

module.exports = router;
