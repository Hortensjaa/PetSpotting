export default interface Pet {
    _id: number,
    species: string,
    name: string,
    description: string | null,
    photo: string | null,
    spottedTime: string,
}