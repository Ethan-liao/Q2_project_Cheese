
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'John',last_name:'andersons'},
        {id: 2, first_name: 'Ron',last_name:'cooper'},
        {id: 3, first_name: 'Ethan',last_name:'wesley'}
      ]);
    });
};
