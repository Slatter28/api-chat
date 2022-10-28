const router = require('express').Router()
const passport = require('passport')
const messagesServices = require("./messages.services")
require('../middlewares/auth.middleware')(passport)



router.get('/:conversation_id/messages',passport.authenticate('jwt', {session: false}),messagesServices.getMessages)
router.post('/:conversation_id/messages',passport.authenticate('jwt', {session: false}),messagesServices.postMessage)
router.get('/:conversation_id/messages/:message_id',passport.authenticate('jwt', {session: false}),messagesServices.getMessagesById)
router.delete('/:conversation_id/messages/:message_id',passport.authenticate('jwt', {session: false}),messagesServices.deleteMessagesById)



module.exports=router;