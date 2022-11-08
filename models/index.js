const Post = require('./Post')
const Comment = require('./Comment')
const User = require('./User')

// A User can have many posts;
User.hasMany(Post,{
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// A User can have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//A Post can have many comments

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment};

