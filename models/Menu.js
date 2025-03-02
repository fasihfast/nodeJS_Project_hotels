const mongoose=require('mongoose')
const menuSchema=mongoose.Schema({
    name:{
        type:String,
        required: true
    },

    price:{
        type:Number,
        default:"2"
    },

    taste:{
        type:String,
        enum:["sweet" ,"salty","sour"]
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    sales:{
        type:Number,
        default: 0
    }
})

const Menu= mongoose.model('Menu',menuSchema)
module.exports=Menu;
