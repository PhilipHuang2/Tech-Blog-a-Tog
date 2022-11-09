const router = require("express").Router();
const { User } = require("../../models/");

//
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.username,
      password: req.body.password,
      raw:true
    });
    console.log(userData.dataValues.id);
    // const users = userData.map((element)=>element.get({plain:true}))
    // console.log(users);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = userData.dataValues.id

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    req.session.save(() => {
        req.session.loggedIn = true;
        req.session.username = userData.dataValues.id;
        res
          .status(200)
          .json({ user: userData, message: 'You are now logged in!' });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
