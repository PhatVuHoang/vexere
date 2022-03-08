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
      "stations",
      [
        {
          name: "Bến Xe Miền Tây",
          address:
            "395 Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
          province: "Thành phố Hồ Chí Minh",
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58",
        },
        {
          name: "Bến Xe Miền Đông Đinh Bộ Lĩnh",
          address: "Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
          province: "Thành phố Hồ Chí Minh",
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58",
        },
        {
          name: "Bến Xe Trung Tâm Đà Nẵng",
          address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000",
          province: "Đà Nẵng",
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58",
        },
        {
          name: "Bến Xe An Sương",
          address: "QL22, Bà Điểm, Hóc Môn, Thành phố Hồ Chí Minh",
          province: "Thành phố Hồ Chí Minh",
          createdAt: "2021-11-25 03:11:58",
          updatedAt: "2021-11-25 03:11:58",
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
    await queryInterface.bulkDelete("stations", null, {});
  },
};
