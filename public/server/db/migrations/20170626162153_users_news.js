
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_news', (table)=>{
    table.increments('id');
    table.integer("user_id");
    table.integer("news_id");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_news');
};
