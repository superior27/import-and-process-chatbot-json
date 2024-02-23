import { Request, Response, Router } from "express";
import ImportController from "../app/controllers/import.controller";

const import_router = Router();

import_router.get('/', ImportController.import);

export default import_router;