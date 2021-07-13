module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('BlogTags', 'tag_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tags',
        key: 'id',
      },
    });
    await queryInterface.changeColumn('BlogTags', 'blog_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Blogs',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('BlogTags', 'tag_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('BlogTags', 'blog_id', {
      type: Sequelize.INTEGER,
    });
  },
};
