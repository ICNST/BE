
exports.up = function(knex) {
    return knex.schema.createTable("child", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("parent_name", 128).notNullable();
        tbl.string("gender", 1).notNullable();
        tbl.string("height", 100).notNullable();

        tbl.string("community", 128)
            .notNullable()
            .references("name")
            .inTable("country")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        tbl.string("country", 128)
            .notNullable()
            .references("name")
            .inTable("country")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  
};
