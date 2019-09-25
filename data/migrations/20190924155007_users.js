
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string("firstName", 128).notNullable();
        tbl.string("lastName", 128).notNullable();
        tbl.string("email", 128).notNullable();
        tbl.string("password", 500).notNullable();
        tbl.string("country", 128).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
