const express = require('express');
const router = express.Router();
const courseControl = require('../controllers/api.course_controller');

router.get('/', courseControl.getAllCourses);

router.get('/:id', courseControl.getCourseById);

router.get('/user/:id', courseControl.getCoursesByUserId);

router.get('/curricula/:id', courseControl.getCoursesByCurriculaId);

router.get('/notcompleted/user/:id', courseControl.getCoursesByUserIdNotCompleted);

router.get('/user/:id/:status', courseControl.getCoursesByUserIdAndStatus);

router.post('/', courseControl.postCourse);

router.delete('/:id', courseControl.deleteCourse )

module.exports = router;


('Induction', 'Induction Training for new employees', 1), 
('Induction', 'Induction Training for new employees', 2), 
('Induction', 'Induction Training for new employees', 3),
('Induction', 'Induction Training for new employees', 4),
('Induction', 'Induction Training for new employees', 5),
('Fire Safety', 'Basic Fire safety Awareness training', 1),
('Fire Safety', 'Basic Fire safety Awareness training', 2),
('Fire Safety', 'Basic Fire safety Awareness training', 3),
('Fire Safety', 'Basic Fire safety Awareness training', 4),
('Fire Safety', 'Basic Fire safety Awareness training', 5),
('Teamwork Skills', 'Teamwork for all employees ', 1), 
('Teamwork Skills', 'Teamwork for all employees ', 2), 
('Teamwork Skills', 'Teamwork for all employees ', 3), 
('Teamwork Skills', 'Teamwork for all employees ', 4), 
('Teamwork Skills', 'Teamwork for all employees ', 5), 
('First Aid', 'First training for all First Aiders', 2),
('Communication skills', 'Communication training for selected employees ', 2),
('Safe Driving', 'Training covering the key concepts of driving safely', 2),
('Welding', 'Training covering TIG and MIG welding', 3),
('Hoist Training', 'Training covering safe use of a hoist', 3),
('Forklift Truck Training', 'FLT training for all FLT operators', 3),
('Manual Handing', 'Practical manual handling training', 3),
('Safety in the work place', 'Advanced safety in the work place aimed at manual workers', 3),
('Advanced CAD', 'CAD training aimed at CAD Designers', 4),
('Innovation', 'Innovation workshop', 4),
('Product Workshop', 'Product Workshop aimed employees requiring advanced technical knowledge', 4),
('Leadership Skills', 'Leadership training for all managers', 5),
('Ethics', 'Ethics training', 5),
('Time Management', 'Time Management training aimed at managers', 5),











