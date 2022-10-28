const Users = require('./users.models');
const Messages = require("./message.models");
const Participants = require("./participants.models");
const Conversations = require("./conversations.models");


const initModels = () => {

    Messages.belongsTo(Users);
    Users.hasMany(Messages);

    Messages.belongsTo(Conversations);
    Conversations.hasMany(Messages);


    Participants.belongsTo(Users);
    Users.hasMany(Participants);

    Participants.belongsTo(Conversations);
    Conversations.hasMany(Participants);

    Conversations.belongsTo(Users);
    Users.hasMany(Conversations);

}


module.exports = initModels