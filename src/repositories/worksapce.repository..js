import Workspace from "../models/Workspace.model.js";
import { ServerError } from "../utils/error.utils.js";

class WorkspaceRepository {
    async findWorkspaceById(id){
        return await Workspace.findById(id)
    }
    async createWorkspace({name, owner_id}){
        const workspace = await Workspace.create(
            {
                name, 
                owner: owner_id,
                members: [owner_id] 
            }
        )
        return workspace
    }
    async addNewMembeer({workspace_id, owner_id, invited_id}){
        const workspace_found = this.findWorkspaceById(workspace_id)
        // que exista el owrkspace
        if(!workspace_found){
            throw new ServerError('Workspace not found', 404)
        }
        //que sea el dueño
        if(workspace_found.owner.equals(owner_id)){
            throw new ServerError('You are not the owner of this workspace', 403)
        }
        //que el invitado ya no sea miembro del workspace
        if(workspace_found.members.includes(invited_id)){
            throw new ServerError('Is already a member', 400)
        }

        workspace_found.members.push(invited_id)
        await workspace_found.save()
        return workspace_found
    }
}

const workspaceRepository = new WorkspaceRepository()
export default workspaceRepository