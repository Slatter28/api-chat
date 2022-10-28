const router = require('express').Router()
const passport = require('passport')
const conversationsServices = require("./conversations.services")
require('../middlewares/auth.middleware')(passport)



router.get('/',passport.authenticate('jwt', {session: false}),conversationsServices.getConversations)
router.post('/',passport.authenticate('jwt', {session: false}),conversationsServices.postConversations)
router.get('/:conversation_id',passport.authenticate('jwt', {session: false}),conversationsServices.getConversationsById)
router.delete('/:conversation_id',passport.authenticate('jwt', {session: false}),conversationsServices.deleteConversationsById)


module.exports=router;