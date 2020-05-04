const Sequelize = require('sequelize')
const sequelize = require('../database/index');

const Books = sequelize.define('books', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
}, {
    timestamps: true
})

sequelize.sync()

module.exports = Books;