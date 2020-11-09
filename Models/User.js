const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userType: {
        type: String, enum: ['student', 'teacher'],
        required: true
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        zipcode: String
    },
    studentReviews: [{
        userID: {type: mongoose.ObjectId},
        createdAt: {type: Date},
        comments: String,
        courseId: {type: mongoose.ObjectId}
    }]
})

module.exports = mongoose.model('User', UserSchema)