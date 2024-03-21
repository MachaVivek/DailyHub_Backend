const mongoose = require('mongoose');
const imgSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
    },
    imgUrl: {
        type: String,
    }
}, {
    timestamps: true  
});

const Imgs = mongoose.model('Imgs', imgSchema);

module.exports = Imgs;
