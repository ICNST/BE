
exports.seed = function(knex) {
      // Inserts seed entries
  return knex('community').insert([
    {id: 1, country_id: 1, name: "Mishawaka"},
    {id: 2, country_id: 1, name: "Ishawaka"},
    {id: 3, country_id: 1, name: "Awaka"},
    {id: 4, country_id: 2, name: "Mish"},
    {id: 5, country_id: 2, name: "Town"},
    {id: 6, country_id: 2, name: "Something"}
  ]);
};
