const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter a job title'],
        unique: false,
        lowercase: false,
    },
    description: {
        type: String,
        required: [true, 'Enter the job description'],
        unique: false,
        lowercase: false,
    },
    deadline: {
        type: Date,
        required: [true, 'Enter the deadline date (YYYY-MM-DD)'],
        unique: false,
        lowercase: false,
    },
    company: {
        type: String,
        required: [true, 'Enter the company name'],
        unique: true,
        lowercase: false,
    }
})





/*userSchema.method.postJob = async function(title, description, deadline, requirements) {

}*/

const Job = mongoose.model('job', jobSchema);
module.exports = Job; 