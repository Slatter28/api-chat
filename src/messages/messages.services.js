const messageController = require("./messages.controller");


const getMessages = (req, res) => {

    const { conversation_id } = req.params;
    messageController.getMessages(conversation_id)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        });
}


const postMessage = (req, res) => {
    const { conversation_id } = req.params;
    const id = req.user.id;
    const { message } = req.body;

    messageController.postMessages({ id }, { conversation_id }, { message })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        });
}

const getMessagesById = (req, res) => {

    const { message_id } = req.params;
    messageController.getMessagesById(message_id)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        });
}
const deleteMessagesById = (req, res) => {

    const { message_id } = req.params;
    messageController.deleteMessagesById(message_id)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        });
}
module.exports = {
    getMessages,
    postMessage,
    getMessagesById,
    deleteMessagesById
}