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
        default: () => new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (5.5 * 60 * 60 * 1000),
      },
    createdAt: {
        type: Date,
        default: () => new Date().getTime() + (5.5 * 60 * 60 * 1000),
    },
    updatedAt: {
        type: Date,
        default: () => new Date().getTime() + (5.5 * 60 * 60 * 1000),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    }

},
{
    timestamps: true
});



const Task = mongoose.model('Task', taskSchema);

module.exports = Task;