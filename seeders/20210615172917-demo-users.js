'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Tony Stark",
        username: "ironman",
        password: "pepper",
        email: "tony@mcu.com",
        movieId: "Iron Man"
      },
      {
        name: "Steve Rogers",
        username: "captamerica",
        password: "peggy",
        email: "steve@mcu.com",
        movieId: "Captain America: The First Avenger"
      },
      {
        name: "Natasha Romanoff",
        username: "blackwidow",
        password: "bruce",
        email: "natasha@mcu.com",
        movieId: "The Incredible Hulk"
      },
      {
        name: "Bruce Banner",
        username: "thehulk",
        password: "natasha",
        email: "bruce@mcu.com",
        movieId: "Thor"
      }
      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
