import { Request, Response, Router } from "express";

const routers = Router();

routers.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server!!!');
  });

export default routers;