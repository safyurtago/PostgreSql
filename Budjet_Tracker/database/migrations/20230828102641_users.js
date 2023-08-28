/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.raw('create extension if not exists "uuid-ossp"')
    return knex.schema
  .createTable('users', function (table) {
    table.uuid('id').notNullable().defaultTo(knex.raw("uuid_generate_v4()")).primary();
    table.string('fullname').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.integer('balance').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('users')
};
