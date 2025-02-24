export const speciesList = ["DOG", "CAT", "OTHER"]

export interface PetResponse {
    id: string,
    species: string,
    name: string,
    description: string | null,
    image_url: string | null,
    time_spotted: string,
    user_id: string,
    user_name: string | null,
    user_avatar: string | null
    likes_num: number,
    liked: boolean
}