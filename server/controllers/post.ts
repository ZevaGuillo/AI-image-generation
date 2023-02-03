import { Request, Response } from "express"
import Post from "../models/mongo/Post";

export const getPosts =async (req: Request, res: Response) => {
    const {limit = 10, since = 0} = req.query;

    const posts = await Post.find()
        .skip(Number(since))
        .limit(Number(limit))

    res.json({
        posts
    })
}

export const createPost = async (req: Request, res: Response) => {

    const { prompt, username, image, model } = req.body;

    try {

        const newPost = { username, model, prompt ,image }

        const postDB = new Post(newPost);

        await postDB.save();

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

