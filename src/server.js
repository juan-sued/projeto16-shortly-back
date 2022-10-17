import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import publicRoutes from './routes/publicRoutes.js';
import privateRoutes from './routes/privateRoutes.js';
const server = express();

server.use([express.json(), cors(), publicRoutes, privateRoutes]);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(chalk.cyan('Servidor rodando na porta ' + PORT));
});
