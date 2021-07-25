module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Blogs', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Blogs', 'UserId');
  },
};
