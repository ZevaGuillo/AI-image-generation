import { Post } from "./post"

export interface User {
    status: "checking" | "not-authenticated" | 'authenticated'
    _id: string,
    username: string,
    slug: string,
    email: string,
    profilePic: string,
    posts: Post[],
    credits: number,
}

export type History = {
    _id: string,
    prompt: string,
    negative_prompt: string,
    image: string,
    model: string,
}
