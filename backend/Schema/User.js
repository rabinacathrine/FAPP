const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String
},
{collection:'userdetails'}
)

const user = mongoose.model('user',userSchema)
module.exports=user