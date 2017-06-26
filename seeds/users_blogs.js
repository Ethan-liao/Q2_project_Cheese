
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_blogs').insert([
        {id: 1, user_id: 'rowValue1'},
        {id: 2, user_id: 'rowValue2'},
        {id: 3, user_id: 'rowValue3'}
      ]);
    });
};
