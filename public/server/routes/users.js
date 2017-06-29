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
  res.render('myPage')
}else {
  res.render('partials/login');
}
});

//Redirects to newsPage
router.get('/newsPage', (req, res, next)=> {
  console.log(req.session);
  res.render('partials/newsPage')
});

router.post('/myPage', (req, res, next)=> {
  let logged = req.session.id;

  console.log(req.session);
  let blog = req.body.blogPost;
  console.log(blog);
  let userID = req.session.id;

  console.log(userID);
if (logged){
  db.insertBlog(blog)
  .then((blogID)=>{
    db.insertIDJoinBlogsTable(blogID,userID)
    .then((userBlogIDs)=>{

      res.render('index',{
        title:'Express'
      });
    })
  })
}else {
  res.render('partials/login');
}
});

module.exports = router;
