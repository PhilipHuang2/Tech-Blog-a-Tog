const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
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
            newPostData.post_date = current_date.toLocaleDateString('en-US');
            return newPostData;
        }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;