import express from "express";
import { router } from "../controller/app.controller";

class App{
    private app: express.Application;

    constructor (){
        this.app = express();
    }

    private portConfig(){
        this.app.listen(3000, function(){ 
            console.log("Server is running!!");
        })
    }

    private routeConfig(){
        this.app.use(router);
    }

    public start() {
        this.portConfig();
        this.routeConfig();
    }
}

export const app = new App();