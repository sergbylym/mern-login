import  express from "express";
import cors from "cors"
import dotenv from "dotenv" 
import mongoose from "mongoose";
import { authValidator } from "./utility/validators.js";
import { getUser, login, register } from "./controllers/UserController.js";
import handleValidationErrors from "./middleware/handleValidationErrors.js";
import isAuthenticated from "./middleware/isAuthenticated.js";


dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB") )
.catch((error) => console.log(error))


const app = express()
app.use(cors())
app.use(express.json()) 



app.post("/register", authValidator, handleValidationErrors, register)
app.post("/login", authValidator, handleValidationErrors, login)
app.get("/user", isAuthenticated, getUser)
const PORT = process.env.PORT || 5555

app.listen(PORT, (error) => { 
    if(error) {
        return console.log(error)
    }
    console.log(`Server is running  on port ${PORT}`)
})