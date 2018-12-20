'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('facts', [
      {
        id: 1,
        name: 'Californication',
        description: "Les californiens rejettent 2 fois plus de CO2 que la moyenne américaine rien que du fait de l’étalement urbain.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Un homme à la mer !',
        description: "5 miliards de tonnes de déchets sont rejetées dans la mer chaque année",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'La 7ème "merveille"',
        description: "Le 7ème continent est un vortex de déchets qui s’agglomèrent peu à peu au milieu du pacifique nord sous l’effet des courants. Ce continent de déchets a 6 fois la surface de la France et son épaisseur peu atteindre jusqu’à 30 mètres.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Size matters',
        description: "Avec des voitures de la tailles ce celle des petites compactes que l’on trouve en Europe, les américains pourraient se passer de l’apport pétrolier du moyen orient",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('facts', null, {}); 
  }
};