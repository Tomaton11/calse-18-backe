import mongoose from "mongoose";

/* 
    channel
    name
    workspaces ref(workspaces)
    created_at
    crated_by ref(users)
*/

//sescribam eñ schema de momgoose

const ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workspaces: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "workspace"
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

const Channel = mongoose.model('channel', ChannelSchema)
export default Channel
