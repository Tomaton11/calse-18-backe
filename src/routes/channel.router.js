import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createChannelController, sendMessageToChannelController, getMessagesListFromChannelController } from '../controllers/channel.controller.js'

const channelRouter = Router()

// crar canal
//body: {name: 'general'}
//headers: 'autorzation' : 'Bearer token'
//chekear que el usurario que quiera creaer un canal este incluido com miembro en el workspace
channelRouter.post('/:workspace_id', authMiddleware, createChannelController)


// enviar mensaje
channelRouter.post('/:channel_id/message', authMiddleware, sendMessageToChannelController)

channelRouter.get('/:channel_id/messages', authMiddleware, getMessagesListFromChannelController)



export default channelRouter