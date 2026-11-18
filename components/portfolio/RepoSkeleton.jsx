export default function RepoSkeleton() {
  return (
    <ul className="repo-grid repo-skeleton" aria-busy="true" aria-label="Đang tải repo">
      {[1, 2, 3].map((n) => (
        <li key={n} className="skeleton" aria-hidden="true" />
      ))}
    </ul>
  );
}