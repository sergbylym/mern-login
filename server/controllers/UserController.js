import jwt from'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from '../models/User.js'


export const register = async  (req, res) => {
    try {
       const password = req.body.password
       const salt = await bcrypt.genSalt(10) 
       const hash = await bcrypt.hash(password, salt)


       const doc = new UserModel({
        email: req.body.email,
        passwordHash :hash
        })

        const user = await doc.save()

        const token = jwt.sign({
            _id: user._id,

        }, 
        "secretKeyForUser",
        {
            expiresIn: "30d"
        }
        )

        const  {passwordHash, ...userData} = user._doc
        res.status(201).json({
            token,
            ...userData
        })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Register failed"
      })  
    }
}