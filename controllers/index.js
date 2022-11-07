const router = require('express').Router();



// HomePage localhost:3001/ ...
router.get('/', (req,res) => {
    res.send("This is gonna be good.");
})

module.exports = router;