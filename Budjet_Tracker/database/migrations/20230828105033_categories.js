/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('categories', function (table) {
    table.uuid('id').notNullable().defaultTo(knex.raw("uuid_generate_v4()")).primary();
    table.string('name').notNullable();
    table.uuid('user_id').notNullable().references('users.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('categories');
};
