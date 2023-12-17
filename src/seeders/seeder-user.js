'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            email: 'admin@gmail.com',
            password: '123456',
            firstName: 'Admin',
            lastName: '1',
            address: 'localhost',
            gender: 1,
            phoneNumber: '0123456789',
            roleId: 'R1',
            image: '1',
            positionId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
    }

};