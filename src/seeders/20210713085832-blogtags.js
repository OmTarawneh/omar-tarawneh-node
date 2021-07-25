const blogTags = [...Array(50)].map((tag) => ({
  blog_id: Math.floor(Math.random() * 100 + 1),
  tag_id: Math.floor(Math.random() * 5 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BlogTags', blogTags, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BlogTags', null, {});
  },
};
