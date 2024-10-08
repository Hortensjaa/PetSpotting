export default interface Pet {
    _id: number,
    species: string,
    name: string,
    description: string | null,
    image_url: string | null,
    time_spotted: string,
}

export const speciesList = ["DOG", "CAT", "OTHER"]