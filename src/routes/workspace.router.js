import{ Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createWorkspaceController, inviteWorkspaceController } from '../controllers/workspace.controller.js'


const workspace_router = Router()

workspace_router.post('/', authMiddleware, createWorkspaceController)

//api/workspaces/invite/92039009svg90rf
workspace_router.post('/:workspace_id/invite/:invite_id', authMiddleware, inviteWorkspaceController)

export default workspace_router