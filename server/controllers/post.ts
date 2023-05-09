import { Request, Response } from "express"
import Post from "../models/mongo/Post";
import User from "../models/mongo/User";
import cd from 'cloudinary'
const cloudinary = cd.v2
import dotenv from 'dotenv';
import { blurhashFromURL } from "../helpers/blurhash-from-url";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getPosts = async (req: Request, res: Response) => {
    const { limit = 10, since = 0, text = "", model = "" } = req.query;

    let posts;

    try {


        if (model) {
            posts = await Post.find({ prompt: { $regex: text }, model: model })
                .sort({ $natural: -1 })
                .skip(Number(since))
                .limit(Number(limit))
                .populate('user', 'username slug profilePic')
        } else {
            posts = await Post.find({ prompt: { $regex: text } })
                .sort({ $natural: -1 })
                .skip(Number(since))
                .limit(Number(limit))
                .populate('user', 'username slug profilePic')
        }

        return res.json({
            posts
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            msg: error,
            error
        })
    }
}

export const createPost = async (req: Request, res: Response) => {

    const { prompt, negative_prompt, userid, image, model } = req.body;


    try {
        const user = await User.findById(userid);

        const { secure_url } = await cloudinary.uploader.upload(image)

        // blur load
        const image_data = await blurhashFromURL(secure_url)

        const postDB = new Post({
            model,
            prompt,
            image: secure_url,
            negative_prompt,
            user: user._id,
            image_data
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

