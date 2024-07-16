const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")

dotenv.config();

const app=express();
app.use(express.json())

app.use(cors());


const PORT= process.env.PORT
app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})

const DB = process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("DB connection is succesful");
}).catch((err)=>{
    console.log(err)
})

