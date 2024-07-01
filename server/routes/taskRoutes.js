const express = require('express');
const router = express.Router();
const task = require('../controller/taskController')

router.post('/create', task.createTask)
router.get('/task/viewall', task.viewAllTask);
router.get('/task/:user', task.userTask)

module.exports = router;