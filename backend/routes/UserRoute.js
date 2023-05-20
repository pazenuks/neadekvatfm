import express from "express";
import {userValidation, validateUserSignIn, validateUserSignUp} from "../middlewares/validation/user.js";
import {createUser, signOut, userSignIn} from "../controllers/user.js";
import {isAuth} from "../middlewares/auth.js";


class UserRoute {

    express;
    router;

    constructor() {
        this.express = express();
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/create-user', this.debugFields, validateUserSignUp, userValidation, createUser);
        this.router.post('/sign-in', this.debugFields, validateUserSignIn, userValidation, userSignIn);
        this.router.post('/sign-out', this.debugFields, isAuth, signOut);
    }

    debugFields(req, res, next) {
        console.log(req.body);
        next();
    }
}

export default new UserRoute().router;