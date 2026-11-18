import GitHubRepos from './GitHubRepos.jsx';

const username = 'FireHaru';

export default function Repositories() {
  return (
    <section className="content-section" id="repositories">
      <div className="section-heading">
        <div>
          <p className="eyebrow">06 — MÃ NGUỒN MỚI CẬP NHẬT</p>
          <h2>Repo gần đây</h2>
        </div>
        <a className="text-link" href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>

      <GitHubRepos username={username} />
      <p className="repo-footnote">Danh sách được tải trực tiếp từ GitHub; cần kết nối mạng.</p>
    </section>
  );
}