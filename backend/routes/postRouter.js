const express = require('express')
const postRouter = express.Router()
const Post = require('../models/Post')

// get 
postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

// delete
postRouter.delete("/:postId", (req, res, next) => {
    Post.findOneAndDelete({_id: req.params.postId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted post ${deletedItem.title} from blog`)
    })
})

// update
postRouter.put("/:postId", (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId},
        req.body,
        { new: true },
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
        )
})



module.exports = postRouter