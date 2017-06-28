const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../../../knexfile')[environment];
const knex = require('knex')(knexConfig);

// insert user_id into User_news
function inserUser_idJoin(id){
  knex('users_news')
  .insert({
    id:1
  })
}

//insert into user table
function insertUserInfo(info){
  console.log("insert table working");
  return knex('users')
  .insert({
    id:info.id,
    username:info.username,
    email:info.email,
    hashed_password:info.password,
  }).returning('id')
}

module.exports = {insertUserInfo:insertUserInfo}
