module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('enrollments', 'active', {
      type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
        'start_date',
        'end_date',
      ]),
      get() {
        return (
          isBefore(this.get('start_date'), new Date()) &&
          isAfter(this.get('end_date'), new Date())
        );
      },
    }),
  },

  down: (queryInterface, Sequelize) => {
    //return queryInterface.removeColumn('');
  }
};
