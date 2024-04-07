const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

// Get all students
router.get('/', StudentController.getAllStudents);

// Get all students
router.get('/:id', StudentController.getAllStudentsbyId);

// Add a student
router.post('/', StudentController.addStudent);

// Delete a student
router.delete('/', StudentController.deleteStudent);

// Block a student
router.patch('/:id/block', StudentController.blockStudent);

module.exports = router;
