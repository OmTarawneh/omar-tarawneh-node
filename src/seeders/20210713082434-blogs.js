const faker = require('faker');

const blogs = [...Array(100)].map((blog, idx) => ({
  title: faker.lorem.word(),
  description: faker.lorem.words(),
  content: faker.lorem.words(),
  likes: Math.floor(Math.random() * 100),
  UserId: Math.floor(Math.random() * 100 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Blogs', blogs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Blogs', null, {});
  },
};
