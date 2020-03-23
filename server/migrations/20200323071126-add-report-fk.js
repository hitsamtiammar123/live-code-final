'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return Promise.all([
      queryInterface.addConstraint('Reports', ['UserId'], {
        type: 'foreign key',
        name: 'Reports_UserId_fk',
        references: { 
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('Reports', ['CountryId'], {
        type: 'foreign key',
        name: 'Reports_CountryId_fk',
        references: { 
          table: 'Countries',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
     ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return Promise.all([
       queryInterface.removeConstraint('Reports','Reports_UserId_fk'),
       queryInterface.removeConstraint('Reports','Reports_CountryId_fk')
     ]);
  }
};
