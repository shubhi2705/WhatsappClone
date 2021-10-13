import mongoose from 'mongoose';

const chatRoomSchema=mongoose.Schema({
    name:String,
    message:String
})


//collection
export default mongoose.model('chatRoom',chatRoomSchema);