 import { body } from "express-validator";


 export const  registerValidator = [
    body("email", "wrong email format").isString().isEmail(),
    body("passwprd", "Wrong password format").isString().isLength({min:5, max:15})
 ]
 