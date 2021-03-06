//-Rotas da aplicação / É importado no server
import { Router } from 'express';
import { SurveyController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();
const surveysController = new SurveyController();

router.post('/users', userController.create);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

export { router };
