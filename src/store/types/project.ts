export type IProject = {
    id: number;
    title: string;
    description: string;
    link: ILink[];
    technologies: string[];
    mockup: string;
}

export type ILink = {
    url: string;
    title: string;
}