import ProjectCard from './ProjectCard.jsx';

export default function ProjectList({ projects, onOpen }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}
    </div>
  );
}