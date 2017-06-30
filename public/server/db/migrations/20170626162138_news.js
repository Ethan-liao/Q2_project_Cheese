
exports.up = function(knex, Promise) {
  return knex.schema.createTable('news', (table)=>{
    table.increments('id');
    table.string("news_source");
    table.string("news_api");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('news');
};
