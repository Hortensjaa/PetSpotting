export default interface User {
    user_id: string,
    provider: string,
    name: string,
    email: string | null,
    avatar_url: string,
}