//Repository é do typeorm e vai gerenciar a conexao com o banco de dados - É importado no Controller

import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };
