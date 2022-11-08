const { User } = require("../models");

const userData = [
  {
    name: "Sal",
    password: "password12345",
  },
  {
    name: "Lernantino",
    password: "password12345",
  },
  {
    name: "Amiko",
    password: "password12345",
  },
  {
    name: "Jordan",
    password: "password12345",
  },
  {
    name: "Blake",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
});

module.exports = seedUser;
