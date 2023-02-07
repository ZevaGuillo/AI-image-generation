import { Request, Response } from "express";
import User from "../models/mongo/User";

export const getUser = async (req: Request, res: Response) => {
    const { slug } = req.params;


    try {

        const user = await User.find({slug}).populate('posts')

        res.json({
            user
        })


    } catch (error) {
        return res.status(401).json({ msg: 'User not found' });
    }

}