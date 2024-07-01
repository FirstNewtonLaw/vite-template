export interface Project {
    name: string;
    href: string;
    description: string;
}

export interface Redir {
    location: string;
    destination: string;
}

export interface Tool {
    name: string;
    href: string;
    bref?: string;
}