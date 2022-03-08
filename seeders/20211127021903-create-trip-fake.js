"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2021-11-27 08:00:00",
          price: 200000,
          createdAt: "2021-11-26 08:39:27",
          updatedAt: "2021-11-26 08:39:27",
        },
        {
          fromStation: 2,
          toStation: 1,
          startTime: "2021-11-27 08:00:00",
          price: 200000,
          createdAt: "2021-11-26 08:39:27",
          updatedAt: "2021-11-26 08:39:27",
        },
        {
          fromStation: 1,
          toStation: 3,
          startTime: "2021-11-27 08:00:00",
          price: 200000,
          createdAt: "2021-11-26 08:39:27",
          updatedAt: "2021-11-26 08:39:27",
        },
        {
          fromStation: 2,
          toStation: 3,
          startTime: "2021-11-27 08:00:00",
          price: 200000,
          createdAt: "2021-11-26 08:39:27",
          updatedAt: "2021-11-26 08:39:27",
        },
        {
          fromStation: 3,
          toStation: 2,
          startTime: "2021-11-27 08:00:00",
          price: 200000,
          createdAt: "2021-11-26 08:39:27",
          updatedAt: "2021-11-26 08:39:27",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('trips', null, {});
  },
};
