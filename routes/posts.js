const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Routen - Routes:
//Gets back all of the posts in DB
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

//Submitting a post to the DB
router.post('/', async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description: req.body.description

    });
//save() saves data to database
try{
   const savedPost = await post.save();
    res.json(savedPost);
}catch(err){
    res.json({message:err});
}
});

//This Post is a specific one (Dynamic parameter). 
//accessing localhost:3000/hey will log out in console: hey

router.get('/:postId',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Deleting a post:
router.delete('/:postId',async (req,res)=>{
    try{
        //mango creates _id automatically. thus : _id
        const removedPost = await Post.deleteOne({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
})

//updating an entry in DB:
router.patch('/:postId',async (req,res)=>{
    try{
        //the title will be changed
        const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
})

module.exports = router;