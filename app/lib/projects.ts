import { projects as portfolioProjects } from "../../data/projects.js";

export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    symbol: string;
};

export const projects: Project[] = portfolioProjects;

export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug);
}