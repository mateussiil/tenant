exports.up = function(knex) {
    return knex.schema.createTable('house', function(table){
        table.increments('id').primary();
        table.integer('cep').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.decimal('number').notNullable();
        table.decimal('price').notNullable();
        table.integer('qtdQuartos').notNullable();
        table.integer('qtdPeoples').notNullable();
        table.string('description');

        table.integer('id_prop').notNullable();

        table.foreign('id_prop').references('cpf').inTable('users');
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('house');
  };
  