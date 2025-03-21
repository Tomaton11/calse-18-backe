import Message from "../models/message.model.js";
import { ServerError } from "../utils/error.utils.js";
import channelRepository from "./channel.repository.js";
import workspaceRepository from "./worksapce.repository..js";

class MessageRepository {
    async createMessage ({sender_id, channel_id, content }){
        const channel_found = await channelRepository.findChannelById(channel_id)
        if(!channel_found){
            throw new ServerError('Channel not found', 404)
        }
        if(channel_found.owner.equals(sender_id)){
            throw new ServerError('You are not the owner of this channel', 403)
        }
        const workspace_found = await workspaceRepository.findWorkspaceById( channel_found.workspaces.toString())
        if(!workspace_found.members.includes(sender_id)){
            throw new ServerError('You are not a member of this workspace', 403)
        }
        await Message.create({
            sender: sender_id,
            channel: channel_id,
            content
        })
        return new_message
    }
    async findMessagesFromChannel({channel_id, user_id}){
        const channel_found = await channelRepository.findChannelById(channel_id)
        console.log(channel_found)
        if(!channel_found){
            throw new ServerError("channel not found", 404)
        }

        if(!channel_found.workspace.members.includes(user_id)){
            throw new ServerError("user is not member of this workspace", 403)
        }
        // if(!channel_found.workspace.members.includes(user_id)){
        //     throw new ServerError("user is not member of this workspace", 403)
        // }
        // const messagesList = await Message.find({channel: channel_id}).populate("sender", "username email")
        const messagesList = await Message.find({channel: channel_id})
        .populate("sender", "username")
        return messagesList
    }
}

const messageRepository = new MessageRepository()
export default messageRepository