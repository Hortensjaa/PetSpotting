export default interface User {
    id: string,
    provider: string,
    name: string,
    email: string | null,
    avatar_url: string,
}