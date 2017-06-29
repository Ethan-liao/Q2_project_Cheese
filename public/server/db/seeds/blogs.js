
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {id:1, post: 'this is my first post'},
        {id:2, post: 'this is my second post'},
        {id:3, post: 'this is my third post'}
      ])
        .then(() => knex.raw("SELECT setval('blogs_id_seq', (SELECT MAX(id) FROM blogs))"))
    });
};
