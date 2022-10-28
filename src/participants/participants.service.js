const participantsController = require("./participants.controllers");


const getParticipants = (req, res) => {

    const { conversation_id } = req.params;

    participantsController.getParticipants(conversation_id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const postParticipants =  (req,res) => {

    const { conversation_id } = req.params;
    const{userId}=req.body;

    participantsController.postParticipants({conversation_id},{userId})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const deleteParticipants =  (req,res) => {

    const { conversation_id ,participant_id} = req.params;

    participantsController.deleteParticipants({participant_id},{conversation_id})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

module.exports = {
    getParticipants,
    postParticipants,
    deleteParticipants
}