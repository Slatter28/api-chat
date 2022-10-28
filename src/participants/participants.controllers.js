const Participants = require("../models/participants.models");
const Users = require("../models/users.models");
const uuid = require('uuid')

const getParticipants = async(id)=>{

    const data = await Participants.findAll({
        where:{
            conversationsId:id
        },
        include:{
            model:Users
        }
    })

    return data;
}

const postParticipants = async(conversationId,userId)=>{

    const newParticipants = await Participants.create({
        id:uuid.v4(),
        userId,
        conversationId

    })

    return newParticipants;
}

const deleteParticipants = async(userId,conversationId)=>{

    const data = await Participants.destroy({
        where:[
            {conversationId},
            {userId}
        ]

    })

    return data;
}

module.exports={
    getParticipants,
    postParticipants,
    deleteParticipants
}