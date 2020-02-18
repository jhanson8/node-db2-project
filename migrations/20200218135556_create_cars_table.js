/*jshint esversion: 6 */

exports.up = function(knex) {
  //do not forget to return
  return knex.schema.createTable("cars", table => {
    table.increments(); //primary key
    table
      .string("Make", 256)
      .notNullable()
      .index(); //makes searching by the name faster
    table
      .string("Model", 256)
      .notNullable()
      .index();
    table
      .integer("VIN")
      .notNullable()
      .index();
    table
      .integer("Mileage")
      .notNullable()
      .index();
    table.string("Transmission", 128);
    table.string("Title_Status", 256);
  });
};

//how to undo the changes => knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
