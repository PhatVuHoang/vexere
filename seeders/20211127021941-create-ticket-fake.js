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
      "tickets",
      [
        {
          trip_id: 1,
          user_id: 1,
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58"
        },
        {
          trip_id: 2,
          user_id: 1,
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58"
        },
        {
          trip_id: 3,
          user_id: 1,
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58"
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
    await queryInterface.bulkDelete("tickets", null, {});
  },
};
