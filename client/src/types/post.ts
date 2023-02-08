import { User } from './user';
export interface Post{
    userid: string,
    prompt: string,
    negative_prompt: string,
    image: string,
    model: string,
    user?:User
}