const express=require('express')
const app=express()
const db=require('./db')
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const personroutes=require('./routes/personroutes')
app.use('/Person',personroutes)
const Task=require('./models/task')
const menuroute=require('./routes/menuroute')
app.use('/menu',menuroute)
require('dotenv').config();


app.get('/',(req,res)=>{
    res.send("Welcome to my hotel !!");
})

const Port=process.env.Port || 2000
app.listen(Port,()=>{
    console.log('server is live now');
});