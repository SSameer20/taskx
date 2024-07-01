const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false

    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',

    },
    dueDate: {
        type: Date,
        default: () => new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});



const Task = mongoose.model('Task', taskSchema);

module.exports = Task;