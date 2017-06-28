
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments();
    // table.varchar("first_name");
    // table.varchar("last_name");
    table.varchar("username");
    table.varchar("email");
    table.varchar("hashed_password").notNullable()
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('users');
};
