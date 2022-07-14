const router = require("express").Router();
const Post = require('../models/postModel')
const auth = require("../middleware/auth");


router.post("/", async (req, res) => {
    try {
      const { post } = req.body;
      const {time} = req.body;
      const {username} = req.body;
      const {photourl} = req.body;
      
      const newPost = new Post({
        post,
        time,
        username,
        photourl
      });
  
      const savedPost= await newPost.save();
  
      res.json(savedPost);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  //
  router.get("/", async (req, res) => {
    try {
      const post = await Post.find().sort({"time": -1});
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  module.exports = router;