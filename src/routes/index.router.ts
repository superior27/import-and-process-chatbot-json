import { Request, Response, Router } from "express";
import import_router from "./import.router";

const routers = Router();

routers.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server!!!');
  });

routers.use('/import', import_router);

export default routers;