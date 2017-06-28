const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

// insert user_id into User_news
function insertIdJoinNewsTable(userID, newsID){
  let newsArray=[];
  console.log("about to read for loop");
  for (var i = 0; i < newsID.length; i++) {
    newsArray.push({
      user_id:userID,
      news_id:newsID[i]
  })
};
  return knex('users_news')
    .insert(newsArray)
  }

  console.log("finished reading for loop");


//insert into user table
function insertUserInfo(info){
  return knex('users')
  .insert({
    // id:info.id,
    username:info.username,
    email:info.email,
    hashed_password:info.password,
  }).returning('id')
}



module.exports = {insertUserInfo:insertUserInfo,
insertIdJoinNewsTable:insertIdJoinNewsTable
}
