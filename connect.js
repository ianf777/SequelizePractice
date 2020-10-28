const Sequelize = require('sequelize')

const db = new Sequelize('sampledb1', 'root', 'Codingcobra!1', {
    host: 'localhost',
    dialect: 'mysql'
})


db.authenticate()
.then(() => console.log("Connection worked"))
.catch((err) => console.error(err))