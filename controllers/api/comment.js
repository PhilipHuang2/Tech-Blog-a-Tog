const router = require('express').Router();
const {Comment} = require('../../models')

router.post('/', async(req,res)=>{
    try{
        const commentData = Comment.create({content: req.body.content, post_id: req.body.post_id, user_id: req.session.user_id});
        res.status(200).json(commentData);
    }catch(err){
        res.json(err);
    }
})


module.exports = router;