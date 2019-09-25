
exports.up = function(knex) {
    return knex.schema.createTable("height", tbl => {
        tbl.increments();
        tbl.string("date").unique().notNullable();
        tbl.integer("height").notNullable();
        tbl.integer("child_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("child")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("height");
};
