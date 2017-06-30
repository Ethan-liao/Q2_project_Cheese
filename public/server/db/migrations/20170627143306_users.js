
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments('id');
    // table.varchar("first_name");
    // table.varchar("last_name");
    table.string("username");
    table.string("email");
    table.varchar("hashed_password").notNullable()
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('users');
};
