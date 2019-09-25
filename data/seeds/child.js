
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('table_name').insert([
        {
            id: 1, 
            name: 'Andrew', 
            parent_name: "Sam", 
            contact: "sam@email.com",
            gender: "M",
            location: "Small Town",
            community_id: 2,
            country: "Uganda",
            country_id: 2
        },
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
};
