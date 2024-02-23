import { Request, Response } from "express";
import importService from "../services/import.service";

class ImportController{

    public async import(req: Request, res: Response){
        const response = await importService.import();
        return res.status(201).json({msg: "Concluído!", response: response})

    }

}

export default new ImportController();