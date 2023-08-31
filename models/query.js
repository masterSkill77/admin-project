const mongoose=require('mongoose')


const querySchema=mongoose.Schema({
       name:String,
       mobile:String,
       email:String,
       message:String
})



module.exports=mongoose.model('query',querySchema)