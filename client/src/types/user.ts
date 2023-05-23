import { Post } from "./post"

export interface User {
    status: "checking" | "not-authenticated" | 'authenticated'
    _id: string,
    username: string,
    slug: string,
    email: string,
    profilePic: string,
    posts: Post[],
    credits: number
}