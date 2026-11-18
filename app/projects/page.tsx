import ProjectCard from "../../components/portfolio/ProjectCard.jsx";
import { projects } from "../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="container all-projects-page">
      <header className="all-projects-header">
        <p className="eyebrow">DỰ ÁN</p>
        <h1>Tất cả dự án</h1>
        <p className="muted">Một số sản phẩm và thử nghiệm mình đã thực hiện.</p>
      </header>
      <div className="all-projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} href={`/projects/${project.slug}`} />
        ))}
      </div>
    </main>
  );
}