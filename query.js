const {db, Student} = require('./model')

const task = async () => {
    try {
    
    await db.sync()
    
    const students = await Student.findAll()
    students.forEach(student => console.log (`
        name: ${student.dataValues.name} \t
        age: ${student.dataValues.age}
    `))
    

    } catch (e) {
        console.error(e)
    }
}

task();