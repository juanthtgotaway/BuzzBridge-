const { connect, connection, connections } = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';
connect(connectionString);

module.exports = connection;