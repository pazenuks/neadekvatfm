import express from "express";
import Routes from "./routes/routes.js";
import mongoose from "mongoose";
import cors from "cors";
import { config } from 'dotenv';

class App {

    express;

    constructor() {
        this.express = express();
        this.dbConnect();
        this.middleware();
        this.routes();
    }


    middleware() {
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));

        this.express.listen(8000, 'localhost', () => {
            console.log('8000 port is listening');
        });

        config();
    }

    async dbConnect() {
        await mongoose.connect("mongodb+srv://pazenuks:PuT1V8eUNbV5Cqmr@neadekvatfm.wgrvb6k.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            .then(() => console.log('Now connected to MongoDB!'))
            .catch(err => console.error('Something went wrong', err));
    }

    routes() {

        this.express.use('/', Routes);

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }
}

export default new App();

