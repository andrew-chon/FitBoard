"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "Test1",
          email: "email1@email.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "Test2",
          email: "email2@email.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "Test3",
          email: "email3@email.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "Test4",
          email: "email4@email.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
