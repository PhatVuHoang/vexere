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
      "users",
      [
        {
          name: "Vũ Hoàng Phát",
          email: "phatvh.work@gmail.com",
          password: "123456789",
          numberPhone: "0123456789",
          avatar:
            "https://image.freepik.com/free-vector/cute-fox-listening-music-with-headphone-cartoon-icon-illustration-animal-music-icon-concept-isolated-flat-cartoon-style_138676-1778.jpg",
          type: "CLIENT",
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58"
        },
        {
          name: "admin",
          email: "admin@gmail.com",
          password: "123456789",
          numberPhone: "0123456789",
          avatar:
            "https://image.freepik.com/free-vector/cute-fox-listening-music-with-headphone-cartoon-icon-illustration-animal-music-icon-concept-isolated-flat-cartoon-style_138676-1778.jpg",
          type: "ADMIN",
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
     await queryInterface.bulkDelete('users', null, {});
  },
};
