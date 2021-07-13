module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      blog_id: {
        type: Sequelize.INTEGER,
      },
      tag_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogTags');
  },
};
