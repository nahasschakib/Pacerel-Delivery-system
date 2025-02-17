const mongoose=require("mongoose");

const colisSchema=mongoose.Schema({
    from:{type:String,require:true},
    to:{type:String,require:true},
    sendername:{type:String,require},
    recipientname:{type:String,require:true},
    senderemail:{type:String,require:true},
    recipientemail:{type:String,require:true},
    weight:{type:Number,require:true},
    cost:{type:Number,require:true},
    date:{type:String,require:true},
    note:{type:String},
    feedback:{type:String},
    status:{type:Number,default:0},},
    {timeStamp:true},
)

module.exports=mongoose.model("colis",colisSchema)