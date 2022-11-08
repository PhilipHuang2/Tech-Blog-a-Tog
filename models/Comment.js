const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      post_date: {
          type: DataTypes.DATE,
      }
    },
    {
      hooks:{
          async beforeCreate(newPostData){
              let current_date = new Date();
              newPostData.post_date = current_date.toLocaleDateString();
              return newPostData;
          }
      },
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "comment",
    }
  );

module.exports = Comment;