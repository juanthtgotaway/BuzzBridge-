const { User, Thought, Reaction } = require('../models');
const mongoose = require('mongoose');

const connection = require('../config/connection');

const users = [
  {
    username: 'Juan234',
    email: 'juan@juan2345',
    thought: [],
  },
];

console.log(connection);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await User.collection.insertMany(users);

  console.table(users);
  console.info('Seeding successful');
  process.exit(0);
});