import { Request, Response } from "express";


export const loginSuccess = async (req: Request, res: Response) => {

    // console.log(req.user);

    if (req.user) {
        
        res.status(200).json({ user: req.user });
    } else {
        
        res.status(401).json({ msg: 'Not Authorized' });
    }

}

export const loginFailed = async (req: Request, res: Response) => {

    res.status(401).json({ msg: 'Log in failure' });

}


export const logout = async (req: Request, res: Response) => {

    req.logout({}, (err: any) => {
        if (err) return res.status(500).json({ msg: 'Something went wrong.' });
        res.redirect(`${process.env.CLIENT_URL}`)
    })

}