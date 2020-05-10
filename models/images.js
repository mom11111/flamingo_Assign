const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
    imageName:{
        type : String,
        required:true
    },
    file : {
        type:String,
        required:true
    }
}
)

const image = mongoose.model('image',imageSchema);

module.exports = image;