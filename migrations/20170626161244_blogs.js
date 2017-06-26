
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', (table)=>{
    table.increments();
    table.varchar("post");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs');
};
