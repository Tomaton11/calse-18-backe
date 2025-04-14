import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createWorkspaceController, invteUserToWorkspaceController, getUserWorkspacesController} from "../controllers/workspace.controller.js"

const workspace_router = Router()

workspace_router.get('/user/:user_id', authMiddleware, getUserWorkspacesByIdController);


workspace_router.post('/', authMiddleware, createWorkspaceController)
//nuevo
workspace_router.get('/', authMiddleware, getUserWorkspacesController);


// api/workspaces/invite/3123112dase3211
workspace_router.post('/:workspace_id/invite/:invited_id', authMiddleware, invteUserToWorkspaceController)

export default workspace_router