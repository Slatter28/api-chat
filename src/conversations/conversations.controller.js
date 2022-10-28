const Conversations = require("../models/conversations.models");
const uuid = require('uuid')

const getConversations = async(id)=>{
    const data = await Conversations.findAll({
        where:{userId:id}
    })
    return data;
}

const postConversations = async(data,id)=>{
    const newConversation = await  Conversations.create({
        id: uuid.v4(),
        title: data.title,
        image_url:data.image_url,
        userId:id
    })
    return newConversation;
}


const getConversationsById = async(id)=>{
    const data = await Conversations.findByPk(id)
    return data;
}

const deleteConversationsById = async(id)=>{
    const data = await Conversations.destroy({
        where: {
            id
        }
    })
    return data;
}


module.exports={
    getConversations,
    postConversations,
    getConversationsById,
    deleteConversationsById
}