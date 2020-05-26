exports.up = function(knex) {
    return knex.schema.createTable('rent', function(table){
        table.integer('id').primary();
        table.integer('id_prop').notNullable();
        table.integer('id_house').notNullable();
        table.integer('id_tenant').notNullable();

        table.foreign('id_prop').references('cpf').inTable('users');
        table.foreign('id_tenant').references('cpf').inTable('users');
        table.foreign('id_house').references('id').inTable('house');
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('rent');
  };
  