'use client';

import { useRepos } from '../../hooks/useRepos.js';
import RepoSkeleton from './RepoSkeleton.jsx';

export default function GitHubRepos({ username }) {
  const { repos, loading, error } = useRepos(username);

  if (loading) return <RepoSkeleton />;
  if (error) return <p className="muted" role="alert">Không tải được repo: {error.message}</p>;
  if (repos.length === 0) return <p className="muted" role="status">Chưa có repo công khai.</p>;

  return (
    <ul className="repo-grid">
      {repos.slice(0, 6).map((repo) => (
        <li className="repo-card surface-card" key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <h3>{repo.name} <span aria-hidden="true">↗</span></h3>
          </a>
          <p>{repo.description || 'Chưa có mô tả.'}</p>
          <span className="repo-stars">★ {repo.stargazers_count}</span>
        </li>
      ))}
    </ul>
  );
}