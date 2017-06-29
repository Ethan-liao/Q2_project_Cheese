
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_blogs').insert([
        {user_id: 1,blog_id:1},
        {user_id: 2,blog_id:2},
        {user_id: 3,blog_id:3}
      ]);
    });
};
