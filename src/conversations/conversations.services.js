const conversationsController = require("./conversations.controller");

const getConversations = (req, res) => {
    const id = req.user.id;
    conversationsController
        .getConversations(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const postConversations = (req, res) => {
    const id = req.user.id;
    const { title, image_url } = req.body;

    conversationsController.postConversations({ title, image_url }, id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getConversationsById = async (req, res) => {
    const id = req.params.conversation_id;
    conversationsController.getConversationsById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const deleteConversationsById = async (req, res) => {
    const id = req.params.conversation_id;
    conversationsController.deleteConversationsById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

module.exports = {
    getConversations,
    postConversations,
    getConversationsById,
    deleteConversationsById
}