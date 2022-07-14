const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    post:{type:String, require:true},
    username:{type:String},
    photourl:{type:String},
    time: { type: Date, default: Date.now},
    

})


const Post = mongoose.model("post",postSchema)

module.exports = Post;