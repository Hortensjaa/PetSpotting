export default interface Pet {
    _id: number,
    species: string,
    name: string,
    description: string | null,
    imageUrl: string | null,
    timeSpotted: string,
}