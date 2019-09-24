
exports.up = function(knex) {
    return knex.schema.createTable("community", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.integer("country_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("country")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("community");
};
