import  express from "express";
import cors from "cors"
import dotenv from "dotenv" 
import mongoose from "mongoose";


dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDb") )
.catch((error) => console.log(error))


const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5555

app.listen(PORT, (error) => {
    if(error) {
        return console.log(error)
    }
    console.log(`Server is running  on port ${PORT}`)
})