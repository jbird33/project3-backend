'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Tony Stark",
        username: "ironman",
        password: "pepper",
        email: "tony@mcu.com",
        movieId: 1
      },
      {
        name: "Steve Rogers",
        username: "captamerica",
        password: "peggy",
        email: "steve@mcu.com",
        movieId: 2
      },
      {
        name: "Natasha Romanoff",
        username: "blackwidow",
        password: "bruce",
        email: "natasha@mcu.com",
        movieId: 3
      },
      {
        name: "Bruce Banner",
        username: "thehulk",
        password: "natasha",
        email: "bruce@mcu.com",
        movieId: 4
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
