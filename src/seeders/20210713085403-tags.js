const faker = require('faker');

const tags = [...Array(5)].map((tag) => ({
  name: faker.lorem.word(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', tags, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
