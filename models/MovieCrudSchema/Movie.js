const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const MovieSchema = new Schema({
    title:{
        type : String,
        require:true,
    },
    director : {
        name:{
            type:String,
            require:true,
        },
        phoneNo:{
            type:String,
            required:true,
        },

    },
    year:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Movies',MovieSchema)