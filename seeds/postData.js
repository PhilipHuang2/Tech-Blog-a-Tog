const { Post } = require("../models");

postData = [
  {
    title: "White Space is the programmer, not the computer",
    content:
      "White space serves to improve readability and has no effect on the compiler's efficiency.",
    user_id: "1"
  },
  { title: "Never was a day that was ruined comments",
    content: "Comment your code, you dumb clucks!",
    user_id: "3"
 },
];

const seedPost = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
  });

module.exports = seedPost;
