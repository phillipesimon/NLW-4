// - Server é responsavel por gerenciar os serviços
import 'reflect-metadata';

import express from 'express';
import './database';
import { router } from './routes';

const app = express();

// Informa o server que vamos utilizar o formato json
app.use(express.json());

app.use(router);

app.listen(3333, () => console.log('Server is running'));
