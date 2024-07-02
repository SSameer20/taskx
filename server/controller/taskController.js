const express = require('express');
const router = express.Router();
const Task = require("../model/taskModel")
const mongoose = require('mongoose')

const viewAllTask = (req, res) =>{
    res.send("Viewing all the Task")
}

const taskUpdate = async(req, res) => {
    
    
    try {
        const postId = req.query._id;
        const {title, description, priority, completed } = req.query;

    
    if (!postId) {
      return res.status(400).json({ message: 'Missing required field: _id' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      postId,
      { $set: { title, description, priority, completed, updatedAt: () => new Date().getTime() + (5.5 * 60 * 60 * 1000) } },
      { new : true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }


}



const createTask = async (req, res) => {
   try {
    const {
        title,
        description,
        priority,
        // dueDate,
        user
    } = req.query;

    if(!title  || !description) {
        return res.status(401).send({msg : "Please fill the required details"})
    }

    const newTask = new Task({
        title,
        description,
        priority,
        // dueDate,
        // createdAt
        user
    })

    await newTask.save();
    res.status(201).send({msg : "Task Uploaded Successful"});
    
   } catch (error) {
    res.status(404).send({msg : "Error While Uploading"});

    
   }




}

const userTask = async (req, res) =>{ 
    const uId = req.query.user;

    if(!mongoose.Types.ObjectId.isValid(uId)){
        return res.status(501).send({msg : "Invalid User Id"});
    }

    const task = await Task.find({user : uId})
    if(!task.length) {
        return res.status(401).send({msg : "No task Found"});
    }

    res.status(201).json(task);
}

module.exports = {
    viewAllTask,
    userTask,
    createTask,
    taskUpdate
}