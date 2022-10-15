import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import signUpRoutes from '../src/routes/signUpRoutes.js';
const server = express();

server.use(cors());
server.use(express.json());

server.use(signUpRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(chalk.cyan('Servidor rodando na porta ' + PORT));
});
