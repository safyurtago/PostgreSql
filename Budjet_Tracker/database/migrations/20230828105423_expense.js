/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('expenses', function (table) {
      table.uuid('id').notNullable().defaultTo(knex.raw("uuid_generate_v4()")).primary();
      table.uuid('user_id').notNullable().references('users.id');
      table.uuid('category_id').notNullable().references("categories.id");
      table.integer('amount').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.raw("current_timestamp"));
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('expenses')
};
