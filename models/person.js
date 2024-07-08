const mongoose=require('mongoose')

const personSchema=mongoose.Schema({

    // "name": "Alice",
    //   "age": 28,
    //   "work": "Chef",
    //   "mobile": "123-456-7890",
    //   "email": "alice@example.com",
    //   "address": "123 Main St, City",
    //   "salary": 60000

    name:{
        type: String ,
        require:true
    },

    age:{
        type: Number,
        required: true
    },

    work:{
        type: String,
        enum:["chef", "manager" ,"waiter"],
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    email:{
        type: String,
        unique: true,
        required:true

    },

    address:{
        type:String,
        required:true
    },

    salary:{
        type:Number,
        required:true
    }
})

const Person= mongoose.model('Person',personSchema)
module.exports=Person;