
import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    channel: 
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "channel"
    },
    sender: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    content: 
    {
        type: String,
        required: true
    } ,
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('message', messageSchema)    
export default Message