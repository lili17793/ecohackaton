'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('challenges', [{
        id : 1,
        name: 'Smart Box',
        description: ' éteins, ou débranche ta box internet la nuit ',
        duration: 172800000,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('challenges', null, {});
  
  }
};
