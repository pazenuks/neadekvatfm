import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import mongoose from "mongoose";
const path = require('path');

class App {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.dbConnect();
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    async dbConnect() {
        await mongoose.connect("mongodb+srv://pazenuks:PuT1V8eUNbV5Cqmr@neadekvatfm.wgrvb6k.mongodb.net/?retryWrites=true&w=majority")
            .then(() => console.log('Now connected to MongoDB!'))
            .catch(err => console.error('Something went wrong', err));
    }


    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(process.cwd() + "/frontend/dist/"));
    }

    private routes(): void {

        this.express.get("/", (req, res, next) => {
            res.sendFile(process.cwd() + "/frontend/dist/index.html");
        });

        // user route
        this.express.use("/api", Routes);

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }
}

export default new App().express;