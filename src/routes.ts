//-routes onde ficam as rotas - é importado no server
import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();

router.post('/users', userController.create);

export { router };
