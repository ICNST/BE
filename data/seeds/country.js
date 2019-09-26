
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('country').insert([
        {id: 1, name: "US"},
        {id: 2, name: "Russia"},
        {id: 3, name: "Uganda"},
        {id: 4, name: "Zimbabwe"},
        {id: 5, name: "Somalia"}
      ]);
};
