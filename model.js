const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const Student = require('./insert')

const db = new Sequelize('sampledb1', 'sampleuser1', 'samplepass1', {
    host: 'localhost',
    dialect: 'mysql'
})

//insert a student into db
const task = async () => {
    try {
        
        await db.sync({alter: true})
        
        //insert a into a table (student)
        await Student.create({
            name: 'BigDickRick',
            age: 12
        })
        
    } catch (e) {
        console.error(e)
    }
}

task();