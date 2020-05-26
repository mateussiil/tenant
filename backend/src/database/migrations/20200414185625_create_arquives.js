exports.up = function(knex) {
    return knex.schema.createTable('arquives', function(table){
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('key').notNullable();
        table.string('size').notNullable();
        table.string('url').notNullable();

        table.integer('id_prop').notNullable();
        table.integer('id_house').notNullable();
        
        table.foreign('id_prop').references('cpf').inTable('users');    
        table.foreign('id_house').references('id').inTable('house');
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('arquives');
  };
  