// console.log('hello world')

const express = require('express')
const mongoose = require('mongoose');
const Joi = require('joi');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const User = require('./Models/User');
const Assignment = require('./Models/assignments');
const Course = require('./Models/courses')
Joi.objectId = require('joi-objectid')(Joi)



const app = express()

app.use(express.json());
dotenv.config({path: './config/config.env'})
connectDB();

app.post('/users', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required(),
        age: Joi.number(),
        email: Joi.string().required(),
        userType: Joi.string().required(),
        address: Joi.object({
            line1: Joi.string(),
            line2: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zipcode: Joi.string()
        }),
        studentReviews: Joi.array().items({
            userID: Joi.objectId(),
            createdAt: Joi.date(),
            comments: Joi.string(),
            courseId: Joi.objectId()
        })
    };
    

    const result = Joi.validate(req.body, schema);
    console.log(result);
    })

app.post('/assignments', (req, res) => {
    const schema = {
        marks: Joi.number(),
        grade: Joi.string(),
        courseID: Joi.objectId(),
        studentID: Joi.objectId(),
        conductedOn: Joi.date(),
        assignmentType: Joi.string(),
        attemptNo: Joi.number(),
        proctoredBy: Joi.objectId()
    }
    const result = Joi.validate(req.body, schema);
    console.log(result)
})

app.post('./courses', (req, res) => {
    const schema = {
        name: Joi.string(3).required(),
        description: Joi.string(),
        teacher: Joi.objectId(),
        enrolledStudents: Joi.array().items( Joi.objectId() )
    
    }
    const result = Joi.validate(req.body, schema);
    console.log(result)
})

// app.get('/', (req, res) => {
//     res.send()
// });

// app.get('/')


const port = process.env.PORT || 2020;

app.listen(port, () => console.log(`Listening on port ${port}..`));