import bcryptjs from 'bcryptjs';
import { request, response } from "express";
import User from "../models/mongo/User";


export const getUser = async (req, res = response) => {

    try {

        res.json({
            msg: 'get user'
        })

    } catch (error) {
        return res.status(400).json({
            msg: 'El token no se pudo verificae',
            error
        })
    }

}

export const createUser = async (req = request, res = response) => {
    const { email, password } = req.body;

    try {
          let usuario = await User.findOne({email})
          if(usuario) {
              return res.status(400).json({
                  ok: false,
                  msg: 'This email is already being used'
              })
          }

          let user = new User( req.body );

          // encriptar contraseña
          const salt = bcryptjs.genSaltSync();
          user.password = bcryptjs.hashSync(password, salt);


          await user.save();

        res.json({
            ok: true,
            uid: user.id,
            name:user.username
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please talk to the administrator'
        })
    }

};

export const loginUser = (req = request, res = response) => {
    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: "login",
        email,
        password,
    });
};

export const revalidateToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "renew",
    });
};
