import bodyParser from "body-parser";
import express from 'express';
import UserRoute from "./UserRoute.js";

class Routes {

    express;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        // user route
        this.express.use("/", UserRoute);
    }
}

export default new Routes().express;