
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_blogs', (table)=>{
    table.increments();
    table.varchar("user_id");
    table.varchar("blog_id");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_blogs');
};
