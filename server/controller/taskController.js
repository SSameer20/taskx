const express = require('express');
const router = express.Router();
const Task = require("../model/taskModel")
const mongoose = require('mongoose')

const viewAllTask = (req, res) =>{
    res.send("Viewing all the Task")
}

const userTask = (req, res) =>{ 
    res.send("View Specific task");
}

const createTask = async (req, res) => {
   try {
    const {
        title,
        description,
        priority,
        dueDate,
        createdAt,
    } = req.query;

    if(!title  || !description) {
        return res.status(401).send({msg : "Please fill the required details"})
    }

    const newTask = new Task({
        title,
        description,
        priority,
        dueDate,
        createdAt
    })

    await newTask.save();
    res.status(201).send({msg : "Task Uploaded Successful"});
    
   } catch (error) {
    res.status(404).send({msg : "Error While Uploading"});

    
   }




}

module.exports = {
    viewAllTask,
    userTask,
    createTask
}