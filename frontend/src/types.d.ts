export interface GlobalError {
    error: string
}

export interface User {
    name: string | null,
    login: string | null,
    email: string | null,
    avatar: string | null,
    company: string | null,
    location: string | null,
    bio: string | null,
    url: string | null
}