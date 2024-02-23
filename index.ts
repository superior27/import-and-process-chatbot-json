import express, { Express, Request, Response , Application, Router } from 'express';
import dotenv from 'dotenv';
import routers from './src/routes/index.router';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/', routers);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});