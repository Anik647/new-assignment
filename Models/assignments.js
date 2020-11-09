const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    marks: Number,
    grade: String, enum:['S', 'A', 'B', 'C', 'D', 'E', 'F'],
    courseID: {type: mongoose.ObjectId},
    studentID: {type: mongoose.ObjectId},
    conductedOn: {type: Date},
    assignmentType: String, enum:['internal', 'external'],
    attemptNo: Number,
    proctoredBy: mongoose.ObjectId
})

module.exports = mongoose.model('Assignment', AssignmentSchema)