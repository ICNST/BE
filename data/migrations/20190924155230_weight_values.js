exports.up = function(knex) {
    return knex.schema.createTable("weight_values", tbl => {
        tbl.increments();
        tbl.integer("weight").notNullable();

        tbl.integer("child_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("child")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        tbl.integer("weight_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("weight")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("weight_values");
};
