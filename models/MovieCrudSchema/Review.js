const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema =  new Schema({
    movie:{
        type: Schema.Types.ObjectId,
        ref:"Movies"
    },
    rating:{
        type:Number,
        require:true,

    },
    review:{
        type:String,
        require:true
    } 
})

module.exports = mongoose.model('Reviews',ReviewSchema);