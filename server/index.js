import  express from "express";
import cors from "cors"
import dotenv from "dotenv" 
import mongoose from "mongoose";
import { registerValidator } from "./utility/validators.js";
import { register } from "./controllers/UserController.js ";


dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB") )
.catch((error) => console.log(error))


const app = express()
app.use(cors())
app.use(express.json())



app.post("/register", registerValidator,register)

const PORT = process.env.PORT || 5555

app.listen(PORT, (error) => {
    if(error) {
        return console.log(error)
    }
    console.log(`Server is running  on port ${PORT}`)
})