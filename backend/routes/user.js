const express = require('express');

const router = express.Router();
const {
    createUser,
    userSignIn,
    uploadProfile,
    signOut,
} = require('../controllers/user');
const {isAuth} = require('../middlewares/auth');
const {
    validateUserSignUp,
    userValidation,
    validateUserSignIn,
} = require('../middlewares/validation/user');

router.post('/create-user', validateUserSignUp, userValidation, createUser);
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn);
router.post('/sign-out', isAuth, signOut);


module.exports = router;
