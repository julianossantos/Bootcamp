import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import StudentEnrollmentController from './app/controllers/StudentEnrollmentController';
import ChekinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import SupportController from './app/controllers/SupportController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// sessions
routes.post('/sessions', SessionController.store);

// Checkins
routes.get('/students/:id/checkins', ChekinController.index);
routes.post('/students/:id/checkins', ChekinController.store);

// Helps Student
routes.get('/students/:id/help-orders', HelpOrderController.index);
routes.post('/students/:id/help-orders', HelpOrderController.store);
// routes.put('/help-orders/:id/answer', HelpOrderController.update);

// middlewares
// Depois deste middleware toda a rota tem que estar com a sessão válida
routes.use(authMiddleware);

// Users
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// Studens
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

// Plans
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id/', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

// Enrollments
routes.get('/enrollments', StudentEnrollmentController.index);
routes.post('/enrollments', StudentEnrollmentController.store);
routes.put('/enrollments/:id/', StudentEnrollmentController.update);
routes.delete('/enrollments/:id', StudentEnrollmentController.delete);

// Helps admin
routes.post('/students/help-orders/:id/answer', SupportController.store);
routes.get('/students/help-orders', SupportController.index);

export default routes;
