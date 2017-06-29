
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        { post: 'this is my first post'},
        { post: 'this is my second post'},
        { post: 'this is my third post'}
      ]);
    });
};
