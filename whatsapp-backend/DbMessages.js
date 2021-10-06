import mongoose from 'mongoose';

const whatsappappSchema=mongoose.Schema({
    message:String,
    name:String,
    timeStamp:String,
    received:Boolean
})


//collection
export default mongoose.model('messagecontents',whatsappappSchema);