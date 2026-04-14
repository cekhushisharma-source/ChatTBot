let express= require("express")
let cors = require("cors")
require("dotenv").config()
let {GoogleGenerativeAI}=require("@google/generative-ai")
let App=express()
App.use(cors())  //Middleware
App.use(express.json()) //store object from frontend to backend

let genAI=new GoogleGenerativeAI(process.env.KEY) //key connected from env to this
let model=genAI.getGenerativeModel({model:"gemini-2.5-flash"})



App.listen(process.env.PORT,()=>{
    console.log("Server Start");
})