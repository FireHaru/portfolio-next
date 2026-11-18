import Link from 'next/link';

/** @typedef {import('../../data/projects.js').projects[number]} Project */

/**
 * @param {{
 *   project: Project,
 *   onOpen?: (project: Project) => void,
 *   href?: string,
 * }} props
 */
export default function ProjectCard({ project, onOpen, href }) {
  const handleOpen = () => {
    if (!onOpen) {
      throw new Error('ProjectCard requires onOpen when href is not provided.');
    }

    onOpen(project);
  };

  return (
    <article
      className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--accent)] dark:bg-slate-800"
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
        {href ? (
          <Link className="project-detail-button" href={href} aria-label={`Xem chi tiết ${project.title}`}>
            Khám phá dự án <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <button
            className="project-detail-button"
            type="button"
            onClick={handleOpen}
            aria-label={`Xem chi tiết ${project.title}`}
          >
            Khám phá dự án <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
    </article>
  );
}