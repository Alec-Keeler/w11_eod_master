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
    await queryInterface.bulkInsert('Platforms', [
      { platform: "Windows" },
      { platform: "MacOS" },
      { platform: "Super Nintendo" },
      { platform: "Gameboy Color" },
      { platform: "XBox" },
      { platform: "XBox 360" },
      { platform: "Playstation" },
      { platform: "Playstation 2" },
      { platform: "Playstation 3" },
      { platform: "Playstation 4" }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Platforms')
  }
};
