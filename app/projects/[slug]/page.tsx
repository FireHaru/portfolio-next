import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "../../lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Không tìm thấy dự án",
      description: "Dự án bạn đang tìm không tồn tại.",
    };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="container min-h-screen py-12">
      <Link className="text-link" href="/projects">
        ← Tất cả dự án
      </Link>
      <article className="surface-card mt-6 p-6 sm:p-8">
        <p className="project-category">{project.category}</p>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-5 leading-7">{project.description}</p>
        <h2 className="mt-8 text-lg font-semibold">Công nghệ</h2>
        <ul className="tag-list">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </article>
    </main>
  );
}
