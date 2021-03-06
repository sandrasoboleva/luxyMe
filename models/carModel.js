const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    model : {type : String , required : true} ,
    year : {type : Number , required : true}, 
    image : {type : String , required : true} , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    rentPerDay : {type : Number , required : true}

}, {timestamps : true}
)
const carModel = mongoose.model('cars' , carSchema)

module.exports = carModel;