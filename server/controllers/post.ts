import { Request, Response } from "express"
import Post from "../models/mongo/Post";
import User from "../models/mongo/User";

export const getPosts = async (req: Request, res: Response) => {
    const { limit = 10, since = 0, text = "" } = req.query;

    const posts = await Post.find({ prompt: { $regex: text } })
        .sort({ $natural: -1 })
        .skip(Number(since))
        .limit(Number(limit))
        .populate('user')

    res.json({
        posts
    })
}

export const createPost = async (req: Request, res: Response) => {

    const { prompt, negative_prompt, userid, image, model } = req.body;


    try {
        const user = await User.findById(userid);

        const postDB = new Post({
            model,
            prompt,
            image,
            negative_prompt,
            user: user._id
        });


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

