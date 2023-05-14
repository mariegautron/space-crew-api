import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { port } from './config';
import cors from 'cors';

import astronautsRoutes from './routes/astronauts.routes';

import swaggerUi from 'swagger-ui-express'; // use import instead of require
import swaggerDocument from './swagger.json'; // use import instead of require

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/astronauts', astronautsRoutes);

const server = http.createServer(app);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
