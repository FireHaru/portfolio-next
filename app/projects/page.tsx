import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="container min-h-screen py-12">
      <header className="section-heading">
        <div>
          <p className="eyebrow">DỰ ÁN</p>
          <h1>Một vài dự án của mình</h1>
        </div>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="surface-card p-6">
            <p className="project-category">{project.category}</p>
            <h2 className="mb-3 text-xl font-bold">{project.title}</h2>
            <p className="muted">{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <Link className="button mt-5" href={`/projects/${project.slug}`}>
              Xem chi tiết <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}