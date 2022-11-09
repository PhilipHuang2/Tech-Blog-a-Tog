const router = require('express').Router();
const { Sequelize } = require('sequelize');
const {Post, User, Comment} = require('../models')

// HomePage localhost:3001/ ...
router.get('/', async (req,res) => {
    const postData = await Post.findAll(
        {
            attributes: ['id','title', 'content', 'post_date', [Sequelize.col('user.name'), 'name']], 
            include: [
                {
                    model: User, 
                }
            ],
            limit: 5,
    });
    const posts = postData.map((element)=> {
        // console.log("\n\n\nthis is a new element ")
        // console.log(element.dataValues);
        return element.get({plain:true})
    });
    // console.log(postData);
    console.log(posts);
    res.render('homepage', {loggedIn: req.session.loggedIn, posts: posts});
})

router.get('/login', async(req,res)=> {
    res.render('login');
})

router.get('/dashboard', async(req,res)=>{
    if(!req.session.loggedIn)
        res.redirect('/login')
    console.log(req.session);
    const postData = await Post.findAll(
        {
            include: [
                {model:User,
                    where:{
                        name: req.session.username
                    },
                }
            ]
    });
    const posts = postData.map((element)=> element.get({plain:true}));
    console.log(posts);
    res.render('dashboard',{loggedIn: req.session.loggedIn,posts: posts});
})

module.exports = router;