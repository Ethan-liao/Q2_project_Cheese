
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news').del()
    .then(function () {
      // Inserts seed entries
      return knex('news').insert([
        {id: 1, news_srouce: 'BBC news', news_api:'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=14a1bd095a374037825240a99606a730'},
        {id: 2, news_srouce: 'TechCrunch', news_api:'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=14a1bd095a374037825240a99606a730'},
        {id: 3, news_srouce: 'MTV news', news_api:'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=14a1bd095a374037825240a99606a730'}
      ]);
    });
};
