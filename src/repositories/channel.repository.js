import Channel from "../models/Channel.model.js";
import workspaceRepository from "./worksapce.repository..js";
import { ServerError } from "../utils/error.utils.js";

class ChannelRepository {
    async findChannelById(channel_id){
        return Channel.findById(channel_id).populate('workspaces')
    }
    async createChannel({ name, workspace_id, user_id }) {
        const workspace_found = await workspaceRepository.findWorkspaceById(workspace_id)
        if (!workspace_found) {
            throw new ServerError("Workspace not found", 404)
        }
        if(!workspace_found.members.includes(user_id)){
            throw new ServerError("You are not member of this workspace", 403)
        }

        const channel = await Channel.create(
            {
                name,
                workspace: workspace_id,
                created_by: user_id
            }
        )
        return channel
    }
}



const channelRepository = new ChannelRepository()

export default channelRepository