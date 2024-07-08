const mongoose=require('mongoose')
require('dotenv').config()
// const mongourllocal=process.env.mongoURLlocal
const mongourl=process.env.mongoURL
mongoose.connect(mongourl)

 const db=mongoose.connection
 
 db.on('connected',()=>{
    console.log('connected to database server');
 })

 db.on('disconnected', ()=>{
    console.log('Disconnected from database server');
 })

 db.on('error',(err)=>{
    console.log('error has error while connecting to database server',err);
 })

 module.exports=db


