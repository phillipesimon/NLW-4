// - Onde se localizam as regra de negócio
import { json, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    //Repository é do typeorm e vai gerenciar a conexao com o banco de dados
    const usersRepository = getRepository(User);

    const userAlreadyExistis = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExistis) {
      return response.status(400).json({
        error: 'User already exists!',
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController };
