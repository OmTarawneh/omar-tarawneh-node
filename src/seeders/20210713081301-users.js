const faker = require('faker');

const users = [...Array(100)].map((user) => ({
  username: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(8),
  image: faker.image.avatar(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
