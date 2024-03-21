const mongoose = require('mongoose');
const upload_story_file = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genere: {
        type: String,
        required: true
    },
    coverPicUrl:{
        type:String,
        required:true
    },
    storyfileUrl:{
        type:String,
        required:true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true  
});

const storyFileSchema = mongoose.model('storyfile', upload_story_file);

module.exports = storyFileSchema;
