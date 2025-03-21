import workspaceRepository from "../repositories/worksapce.repository..js";




export const createWorkspaceController = async (req, res) => {
    try {
        const {name} = req.body
        const owner_id = req.user._id
        const new_workspace = await workspaceRepository.createWorkspace({name, owner_id})
        res.json({
            ok: true,
            status: 200,
            message: 'Workspace created!',
            data: {
                new_workspace
            }
        })
    } catch (error) {
        console.log("error al registrar", error);

        if (error.status) {
            return res.status(400).send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        res.status(500).send({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}


export const inviteWorkspaceController = async (req, res) => {
    try {
        const user_id = req.user._id // id de quien invita
        const {invite_id, workspace_id} = req.params  //di invitado

        const workspace_found = await workspaceRepository.addNewMembeer({workspace_id, owner_id: user_id, inviter_id: invite_id})
        res.json({
            ok: true,
            status: 200,
            message: 'Workspace invited!',
            data: {
                workspace_found
            }
        })
    }
    catch (error) {
        console.log("error al registrar", error);

        if (error.status) {
            return res.status(400).send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        res.status(500).send({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}
