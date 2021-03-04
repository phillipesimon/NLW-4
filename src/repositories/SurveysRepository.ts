//Repository é do typeorm e vai gerenciar a conexao com o banco de dados - É importado no Controller

import { EntityRepository, Repository } from 'typeorm';
import { Survey } from '../models/Survey';

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
