import { Request, Response } from "express"
import mongoose from "mongoose";
import Post from "../models/mongo/Post";
import User from "../models/mongo/User";

const ObjectId = mongoose.Types.ObjectId;

export const getPosts = async (req: Request, res: Response) => {
    const { limit = 10, since = 0 } = req.query;

    const posts = await Post.find()
        .skip(Number(since))
        .limit(Number(limit))
        .populate('user')

    console.log(posts);
    

    res.json({
        posts
    })
}

export const createPost = async (req: Request, res: Response) => {

    const { prompt, userid, image, model } = req.body;


    try {
        const user = await User.findById(userid);

        console.log(user._id,'ffffffffffffffffffffffffffffffffffffff');
        

        const postDB = new Post({
            model,
            prompt,
            image,
            user: user._id
        });
        console.log(postDB,'ffffffffffffffffffffffffffffffffffffff');


        await postDB.save();

        user.posts.push(postDB._id);

        await user.save();

        return res.status(201).json({
            status: 'ok',
            msg: 'Created new Post',
            postDB
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            msg: error,
            error
        })
    }
}

