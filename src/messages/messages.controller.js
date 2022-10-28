const Message = require("../models/message.models");
const Conversations = require("../models/conversations.models");
const uuid = require('uuid')

const getMessages = async(id)=>{
    const data = await Conversations.findOne({
        where:{
           id
        },
        include:{
            model:Message
        }
    })

    return data;
}

const postMessages = async(userId,conversationId,message)=>{
    const newMessages = await Message.create({
        id:uuid.v4(),
        message,
        userId,
        conversationId
    })
    return newMessages;
}

const getMessagesById = async(id)=>{
    const data = await Message.findByPk(id)
    return data;
}

const deleteMessagesById = async(id)=>{
    const data = await Message.destroy({
        where:{id}
    })
    return data;
}


module.exports={
    getMessages,
    postMessages,
    getMessagesById,
    deleteMessagesById
}