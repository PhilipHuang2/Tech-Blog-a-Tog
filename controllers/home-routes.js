const router = require("express").Router();
const session = require("express-session");
const { Sequelize } = require("sequelize");
const { Post, User, Comment } = require("../models");

// HomePage localhost:3001/ ...
router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "post_date",
      [Sequelize.col("user.name"), "name"],
    ],
    include: [
      {
        model: User,
      },
    ],
    limit: 5,
  });
  const posts = postData.map((element) => {
    // console.log("\n\n\nthis is a new element ")
    // console.log(element.dataValues);
    return element.get({ plain: true });
  });
  // console.log(postData);
  // console.log(posts);
  res.render("homepage", { loggedIn: req.session.loggedIn, posts: posts });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) res.redirect("/login");
  console.log(req.session);
  const postData = await Post.findAll({
    where: { user_id: req.session.username },
  });
  const posts = postData.map((element) => element.get({ plain: true }));
  console.log(posts);
  res.render("dashboard", { loggedIn: req.session.loggedIn, posts: posts });
});

router.get("/newPost", async (req, res) => {
  if (!req.session.loggedIn) res.redirect("/login");
  res.render("newPost", {
    loggedIn: req.body.loggedIn,
    id: req.session.username,
  });
});

router.get("/comment/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: [
        "id",
        "title",
        "content",
        "post_date",
        [Sequelize.col("user.name"), "name"],
      ],
      raw: true,
      include: [{ model: User }],
    });
    const commentData = await Comment.findAll({
      attributes: [
        "id",
        "content",
        "post_date",
        [Sequelize.col("user.name"), "name"],
      ],
      where: { post_id: req.params.id },
      include: [{ model: User }],
    });
    const comments = commentData.map((element) => {
      return element.get({ plain: true });
    });
    console.log(comments);
    console.log(postData);
    res.render("comment", {
      loggedIn: req.session.loggedIn,
      post: postData,
      comments: comments,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get('/newComment/:id', async(req,res)=>{
    try{
        if (!req.session.loggedIn) res.redirect("/login");
        res.render('newComment', {loggedIn: req.session.loggedIn})
    }catch(err){
        res.json(err);
    }
})

module.exports = router;
