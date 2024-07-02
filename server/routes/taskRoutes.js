const express = require('express');
const router = express.Router();
const task = require('../controller/taskController')

router.post('/create', task.createTask)
router.get('/viewall', task.viewAllTask);
router.get('/user', task.userTask)
router.put('/update', task.taskUpdate)

module.exports = router;