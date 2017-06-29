const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../../knexfile')[environment];
const knex = require('knex')(knexConfig);


// insert user_id into User_news
function insertIdJoinNewsTable(userID, newsID) {
  let newsArray = [];
  for (var i = 0; i < newsID.length; i++) {
    newsArray.push({
      user_id: userID,
      news_id: newsID[i]
    })
  };
  return knex('users_news')
    .insert(newsArray)
}



//insert into user table
function insertUserInfo(info, pw) {

  return knex('users')
    .insert({
      username: info.username,
      email: info.email,
      hashed_password: pw,
    }).returning('id')
}

//insert into blogs table
function insertBlog(text) {
  console.log("inserting current data into blogs table " + text);
  return knex('blogs')
    .insert({
      post: text
    }).returning('id')
}

//insert into users_blogs join table
function insertIDJoinBlogsTable(blogID, userID) {
  return knex('users_blogs')
    .insert({
      blog_id: parseInt(blogID),
      user_id: userID
    }).returning('id');
}

//get blog posts for users
function getBlogPosts() {
  return knex('users')
    .innerJoin('users_blogs', 'users.id', 'users_blogs.user_id')
    .innerJoin('blogs','blogs.id','users_blogs.blog_id')
    .where('users_blogs.user_id',4);

}

module.exports = {
  insertUserInfo: insertUserInfo,
  insertIdJoinNewsTable: insertIdJoinNewsTable,
  insertBlog: insertBlog,
  insertIDJoinBlogsTable: insertIDJoinBlogsTable,
  getBlogPosts:getBlogPosts
}
