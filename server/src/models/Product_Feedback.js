const { DataTypes } = require('sequelize');


module.exports = (dataBase) => {

    dataBase.define('Product_Feedback', {
        id_product: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        score: {
            type: DataTypes.NUMBER,
        },
        comments: {
            type: DataTypes.STRING,
        },

    })
}