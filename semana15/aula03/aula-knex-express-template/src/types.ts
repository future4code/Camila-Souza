export enum ACTOR_TYPES {
    ND = "Not Director",
    D = "Director"
}

export type Actor = {
    id: string,
    name: string,
    salary: number,
    birth_date: undefined,
    gender: string,
    type: ACTOR_TYPES
}