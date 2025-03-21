import channelRepository from "../repositories/channel.repository.js";
import messageRepository from "../repositories/message.repository.js";



export const createChannelController =async (req, res) =>{
    try{
        //Channel name
        const {name} = req.body
        //id del usuario que quiere crear el canal
        const user_id = req.user._id
        //Workspace al que quiero añadir este canal
        const {workspace_id} = req.params
        const new_channel = await channelRepository.createChannel({name, owner_id: user_id, workspace_id})
        res.json({
            ok: true,
            status: 200,
            message: "Channel created",
            data: {
                new_channel
            }
        })
    }
    catch(error){
        console.log("error al crear canal", error);
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

export const sendMessageToChannelController = async (req, res) => {
    try {
        const user_id = req.user._id
        const {channel_id} = req.params
        const {content} = req.body

        const new_message = await messageRepository.create({sender_id: user_id, channel_id, content})
        res.json({
            ok: true,
            status: 200,
            message: "Message sent",
            data: {
                new_message
            }
        })
    }
    catch (error) {
        console.log("error al enviar mensaje", error);

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

export const getMessagesListFromChannelController = async (req, res) => {
    try {
        const user_id = req.user._id
        const {channel_id} = req.params
        const messages = await messageRepository.findMessagesByChannelId(channel_id)
    }
    catch (error) {
        console.log("error al obterner lista de mensajes", error);

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
