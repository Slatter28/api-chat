const db = require('../utils/database');
const {DataTypes} = require("sequelize");

const Messages=db.define("messages",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    message:{
        type:DataTypes.STRING,
        allowNull: false
    }
    
});

module.exports= Messages;