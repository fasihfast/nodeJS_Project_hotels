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
app.get('/',(req,res)=>{
    res.send("Welcome to my hotel !!");
})
app.listen(2000,()=>{
    console.log('server is live now');
});