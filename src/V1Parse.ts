import {Request, Response} from "express";

import v1Data = require('./v1.json'); 

export interface ParseData { 
    data: string
   }

export class V1Parse { 
    
    public routes(app): void {       
        app.route('/api/v1/parse')
        .post(async (req: Request, res: Response) => {
            try {
           const user = req.body.data as ParseData; 
           res.status(200).send(v1Data);
        } catch (e) {
            res.status(404).send(e.message);
          }
        })               
    }
}