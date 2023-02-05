import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import * as dotenv from 'dotenv';
import User from '../models/mongo/User';

dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: `${process.env.GOOGLE_CLIENT_ID}`,
            clientSecret: `${process.env.GOOGLE_SECRET_ID}`,
            callbackURL: '/api/v1/auth/google/callback',
            scope: ['profile', 'email']
        },
        async (_accessToken: string, _refreshToken: string, profile: any, done) => {
            const user = await User.findById(profile.id);
            if (user) {
                return done(null, user);

            } else {
                const newuser = await User.create({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,
                    _id: profile.id
                })
                return done(null, newuser);
            }
        }
    )
)

passport.serializeUser((user:any, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id);
    done(null, user)
} )