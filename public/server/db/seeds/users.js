
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id:1,username:'ja',email:'janderson@hello.com',hashed_password:'1234'},
        {id:2,username:'rc',email:'rcooper@hello.com',hashed_password:'2234'},
        {id:3,username:'ew',email:'ewesley@hello.com',hashed_password:'3234'}
      ])
    .then(() => knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"));
    })
};
// first_name: 'John',last_name:'andersons',
// first_name: 'Ron',last_name:'cooper',
// first_name: 'Ethan',last_name:'wesley',
