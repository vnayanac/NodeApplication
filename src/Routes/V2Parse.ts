import {Request, Response} from "express";

import v2Data = require('./JsonFiles/v1.json'); 

export interface ParseData { 
    data: string
   }

export class V2Parse { 
    
    public routes(app): void {       
        app.route('/api/v2/parse')
        .post(async (req: Request, res: Response) => {
            try {    
            const user = req.body.data as ParseData;        
            res.status(200).send(v2Data);
        } catch (e) {
            res.status(404).send(e.message);
          }
        })               
    }

}