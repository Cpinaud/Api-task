const express = require('express');
const validate = require('../middlewares/validateTask');
const router = express.Router();
const { getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask } = require('../controllers/tasksController');

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/',validate, createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


module.exports = router;
