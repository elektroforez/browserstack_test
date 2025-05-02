const { faker } = require("@faker-js/faker");

module.exports = {
  inputData: {
    email: faker.internet.email(),
    password: faker.internet.password(),
    invalidEmail: faker.lorem.word(),
    invalidPassword: "1234",
  },
};
