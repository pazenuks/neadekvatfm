import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import { User } from '../models/user';

// import mongoose from "mongoose";

class UserRoute {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get all the users
        this.express.get("/users", async (req, res, next) => {
            this.logger.info("url:" + req.url);
            const users = await User.find({});
            res.json(users);
        });

        // request to get all the users by userName
        this.express.get("/users/:userName", (req, res, next) => {
            this.logger.info("url:" + req.url);
            const user = this.users.filter(function(user) {
                if (req.params.userName === user.userName) {
                    return user;
                }
            });
            res.json(user);
        });

        // request to post the user
        // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
        this.express.post("/user", async (req, res, next) => {
            this.logger.info("url:" + req.url);
            this.users.push(req.body.user);
            const user = User.build(req.body.user);
            user.save();
            res.json(this.users);
        });
    }
}

export default new UserRoute().express;