const db = require("../utils/database");
const{DataTypes}=require("sequelize");

const Conversations = db.define("conversations",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imageUrl:{
        type:DataTypes.STRING,
        field:"image_url"
    }
})

module.exports = Conversations;