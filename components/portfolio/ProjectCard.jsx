export default function ProjectCard({ project, onOpen }) {
  return (
    <article
      className="min-w-0 overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--accent)] dark:bg-slate-800"
    >
      <div className="project-art" aria-hidden="true">
        <span>{String(project.id).padStart(2, '0')}</span>
        <strong>{project.symbol}</strong>
      </div>
      <div className="flex flex-1 flex-col p-[18px]">
        <p className="project-category">{project.category}</p>
        <h3 className="mb-2.5 text-[18px] font-bold leading-[1.35] text-[color:var(--text-h)]">
          {project.title}
        </h3>
        <p className="flex-1 text-[13px] text-[color:var(--muted)]">{project.description}</p>
        <ul className="tag-list">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <button
          className="project-detail-button"
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Xem chi tiết ${project.title}`}
        >
          Khám phá dự án <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}