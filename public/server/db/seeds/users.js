
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'ja',email:'janderson@hello.com',hashed_password:'1234'},
        {username:'rc',email:'rcooper@hello.com',hashed_password:'2234'},
        {username:'ew',email:'ewesley@hello.com',hashed_password:'3234'}
      ]);
    });
};
// first_name: 'John',last_name:'andersons',
// first_name: 'Ron',last_name:'cooper',
// first_name: 'Ethan',last_name:'wesley',
