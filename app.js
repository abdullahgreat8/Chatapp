const express=require('express')
const pool=require('./db')
const env=require('dotenv')
const userrouter=require('./Routes/user_routes')
env.config()

const app=express()
port=5000

app.use(express.json());
app.use('/user',userrouter)
pool.connect((err,client,release)=>{
    if(err){
        console.log(err)
        process.exit(1)
    }
    else{
        console.log("Connected Successfully")
        release();

        app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`)
        })
    }
})

