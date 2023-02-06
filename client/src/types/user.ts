export interface User {
    status: "checking" | "not-authenticated" | 'authenticated'
    _id: string,
    username: string,
    slug: string,
    email: string,
    profilePic: string,
}