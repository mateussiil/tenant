exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.string('cpf').primary();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();
        table.boolean('tenant').notNullable();
        table.boolean('proprietary').notNullable();
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('users');
  };
  