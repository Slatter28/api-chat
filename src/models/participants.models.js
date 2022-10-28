const db = require("../utils/database");
const {DataTypes}=require("sequelize");
const Participants = db.define("participants",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    }
});

module.exports= Participants;