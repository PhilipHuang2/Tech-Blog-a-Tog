const router = require('express').Router();



// HomePage localhost:3001/ ...
router.get('/', (req,res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
})

module.exports = router;