const { Post } = require('../../models');

const router = require('express').Router();

router.post('/signup', async(req,res)=> {
    try{
        const postData = await Post.create({title:req.body.title, content: req.body.content, user_id:req.session.username});
        res.status(200).json(postData);
    } catch(err){
        res.status(400).json(err);
    }
    

})

module.exports = router;