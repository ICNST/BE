
exports.up = function(knex) {
    return knex.schema.createTable("admin", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("password", 500).notNullable();
        tbl.boolean("isAdmin").defaultTo(true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("admin");
};
