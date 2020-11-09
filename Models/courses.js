const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.ObjectId,
        unique: true
    },
    enrolledStudents: {
        type: [ mongoose.ObjectId ]
    }
})

module.exports = mongoose.model('Course', CourseSchema)