'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      {
        "id": 1,
        "name": "Alex",
        "team": "engineering",
        "position": "Server Developer",
        "emailAddress": "alex@google.com",
        "phoneNumber": "010-xxxx-xxxx",
        "admissionDate": "2018/12/10",
        "birthday": "1994/11/08",
        "profileImage": "profile1.png"
      },
      {
        "id": 2,
        "name": "Benjamin",
        "team": "engineering",
        "position": "Server Developer",
        "emailAddress": "benjamin@google.com",
        "phoneNumber": "010-xxxx-xxxx",
        "admissionDate": "2021/01/20",
        "birthday": "1992/03/26",
        "profileImage": "profile2.png"
      },
      {
        "id": 3,
        "name": "Charles",
        "team": "engineering",
        "position": "Android Developer",
        "emailAddress": "charles@google.com",
        "phoneNumber": "010-xxxx-xxxx",
        "admissionDate": "2018/12/10",
        "birthday": "1994/11/08",
        "profileImage": "profile3.png"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {}); 
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
