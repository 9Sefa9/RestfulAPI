const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Routen - Routes:
router.get('/post', (req,res)=>{
    res.send('i am a post!');
});


router.post('/',(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description: req.body.description

    });
//save() saves data to database, exec() returns a promise 
    post.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err})
    });

});


module.exports = router;