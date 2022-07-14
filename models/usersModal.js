const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name :{ type: String, require:true},
    email :{ type: String, require:true},
    passwordHash :{ type: String, require:true},
    photourl :{ type: String, require:true}
})

const user = mongoose.model('user', userSchema)

module.exports = user;
