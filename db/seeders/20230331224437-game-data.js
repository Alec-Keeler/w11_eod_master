'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Games', [
      { gameName: "Horizon Zero Dawn", releaseYear: 2017 },
      { gameName: "Donkey Kong Country", releaseYear: 1994 },
      { gameName: "Fallout New Vegas", releaseYear: 2010 },
      { gameName: "Crash Team Racing", releaseYear: 2019 },
      { gameName: "Mass Effect 2", releaseYear: 2010 },
      { gameName: "BioShock", releaseYear: 2007 },
      { gameName: "Persona 5", releaseYear: 2016 },
      { gameName: "GTA: San Andreas", releaseYear: 2004 },
      { gameName: "World of Warcraft", releaseYear: 2004 },
      { gameName: "Pokemon Red", releaseYear: 1998 },
      { gameName: "Kirby Tilt 'n' Tumble", releaseYear: 2000 }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games')
  }
};
