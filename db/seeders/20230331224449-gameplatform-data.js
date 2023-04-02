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
    await queryInterface.bulkInsert('GamePlatforms', [
      { gameId: 1, platformId: 10 },
      { gameId: 1, platformId: 1 },
      { gameId: 2, platformId: 3 },
      { gameId: 2, platformId: 3 },
      { gameId: 3, platformId: 3 },
      { gameId: 3, platformId: 9 },
      { gameId: 3, platformId: 1 },
      { gameId: 4, platformId: 7 },
      { gameId: 5, platformId: 6 },
      { gameId: 5, platformId: 9 },
      { gameId: 5, platformId: 1 },
      { gameId: 6, platformId: 6 },
      { gameId: 7, platformId: 9 },
      { gameId: 7, platformId: 10 },
      { gameId: 8, platformId: 5 },
      { gameId: 8, platformId: 8 },
      { gameId: 8, platformId: 1 },
      { gameId: 9, platformId: 1 },
      { gameId: 9, platformId: 2 },
      { gameId: 10, platformId: 4 },
      { gameId: 11, platformId: 4 }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('GamePlatforms')
  }
};
