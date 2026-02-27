const { Sequelize } = require("sequelize");

const databaseCon = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'student_database',
    logging: true
})

module.exports = databaseCon;