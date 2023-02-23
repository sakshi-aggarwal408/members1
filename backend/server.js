const express=require('express')
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const cors = require('cors')
const api = require('./routes/route')
const app=express()


const port=process.env.express|| 5000
mongoose.set('strictQuery', false);
const url = "mongodb://localhost:27017/MembersDatabase"
mongoose.connect(url).then((res)=>{
    try{
        if(res){
            console.log("databased is created successfully")

        }
    }
    catch(err)
    {
        console.log(err)
    }
})
    

app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())


app.use('/api',api)

app.listen(port,()=>{
    try{
        console.log("server created")
    }
    catch(err){
        console.log(err)
    }

})