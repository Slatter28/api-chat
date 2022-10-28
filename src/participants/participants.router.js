const participantsService=require("./participants.service");
const router = require('express').Router()
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)


router.get('/:conversation_id/participants',passport.authenticate('jwt', {session: false}),participantsService.getParticipants)
router.post('/:conversation_id/participants',passport.authenticate('jwt', {session: false}),participantsService.postParticipants)
router.delete('/:conversation_id/participants/:participant_id',passport.authenticate('jwt', {session: false}),participantsService.deleteParticipants)


module.exports=router;