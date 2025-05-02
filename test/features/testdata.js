const { faker } = require("@faker-js/faker");

module.exports = {
  fakeData: {
    email: faker.internet.email(),
    password: faker.internet.password(),
    invalidEmail: faker.lorem.word(),
    invalidPassword: "1234",
  },
};
