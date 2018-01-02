const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/first-contact', {logging: false})

// define your model(s) here

module.exports = {
  db
}
