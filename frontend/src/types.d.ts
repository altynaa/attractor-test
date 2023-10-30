export interface GlobalError {
    error: string
}

export interface User {
    token: string,
    name: string | null,
    login: string | null,
    email: string | null,
    avatar: string | null,
    company: string | null,
    location: string | null,
    bio: string | null,
    url: string | null
}

export interface Profile {
    token: string,
    name: string,
    company: string,
    location: string,
    bio: string,
}

export interface Repository {
    id: number,
    name: string,
    url: string,
    ownerName: string,
    ownerUrl: string,
    private: boolean
}

export interface Search {
    name: string
}