
exports.up = function(knex) {
    return knex.schema.createTable("country", tbl => {
        tbl.increments();
        tbl.string("name", 128)
            .unique()
            .notNullable()
            .references("country")
            .inTable("users")
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("country");
};
