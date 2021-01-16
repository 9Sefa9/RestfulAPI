const mongoose = require('mongoose');


//Schema : represents how "that" post looks. Describing how a data looks
const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
});

module.exports = mongoose.model('MyPosts', PostSchema);

