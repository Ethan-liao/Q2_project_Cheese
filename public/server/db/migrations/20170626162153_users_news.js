
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_news', (table)=>{
    table.increments('id');
    table.string("user_id");
    table.string("news_id");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_news');
};
