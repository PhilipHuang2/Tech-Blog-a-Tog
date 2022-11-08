const { Comment } = require("../models");

const commentData = [
    {
        content: "Why the hell do I need to make your life easier?",
        user_id: "2",
        post_id: "1",
    },
    {
        content: "Just read the Documentation!?!",
        user_id: "4",
        post_id: "2",
    }
];

const seedComment = () => Comment.bulkCreate(commentData, {
    individualHooks: true,
});

module.exports = seedComment;