import * as express from 'express';
import * as bodyParser from 'body-parser';
import { V1Parse } from "./V1Parse";
import { V2Parse } from "./V2Parse";

class App {

    public app: express.Application;
    public routes: V1Parse = new V1Parse();
    public routesv2: V2Parse = new V2Parse();

    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.routesv2.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;