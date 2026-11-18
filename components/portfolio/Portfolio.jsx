'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects.js';
import { series } from '../../data/measurements.js';
import LineChart from './LineChart.jsx';
import ProjectList from './ProjectList.jsx';
import TagFilter from './TagFilter.jsx';
import ProjectDialog from './ProjectDialog.jsx';

const featuredProjects = projects.slice(0, 4);
const tags = [...new Set(featuredProjects.flatMap((project) => project.tags))];

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLocaleLowerCase('vi');
}

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState('all');
  const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(13);
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedProject, setSelectedProject] = useState(null);

  const measurement = series[0];
  const points = measurement.points.slice(0, count);
  const average = (
    points.reduce((sum, point) => sum + point, 0) / points.length
  ).toFixed(1);
  const normalizedQuery = normalize(query.trim());
  const shownProjects = featuredProjects
    .filter((project) => activeTag === 'all' || project.tags.includes(activeTag))
    .filter((project) => normalize(
      [project.title, project.category, project.description, ...project.tags].join(' '),
    ).includes(normalizedQuery))
    .sort((a, b) => sortOrder === 'name' ? a.title.localeCompare(b.title, 'vi') : a.id - b.id);

  return (
    <div className="portfolio">
      <section className="content-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 — KHÔNG GIAN THỬ NGHIỆM</p>
            <h2>Dự án nổi bật</h2>
          </div>
          <Link className="text-link" href="/projects">
            Xem tất cả dự án ↗
          </Link>
        </div>

        <div className="project-controls">
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tìm dự án, công nghệ, chủ đề…"
              aria-label="Tìm dự án"
            />
          </label>
          <label className="sort-label">
            Sắp xếp
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="default">Mặc định</option>
              <option value="name">Tên A–Z</option>
            </select>
          </label>
        </div>
        <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
        <p className="result-count" role="status" aria-live="polite">
          Hiển thị {shownProjects.length} / {featuredProjects.length} dự án nổi bật
        </p>
        {shownProjects.length > 0 ? (
          <ProjectList projects={shownProjects} onOpen={setSelectedProject} />
        ) : (
          <div className="empty-state">
            <h3>Chưa tìm thấy dự án phù hợp.</h3>
            <p>Thử từ khóa khác hoặc bỏ bộ lọc hiện tại.</p>
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                setQuery('');
                setActiveTag('all');
                setSortOrder('default');
              }}
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      </section>

      <section className="content-section measurements-section" id="measurements">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 — QUAN SÁT DỮ LIỆU</p>
            <h2>{measurement.label}</h2>
          </div>
          <p className="muted">Dữ liệu thời tiết lịch sử<br />theo giờ tại TP. Hồ Chí Minh.</p>
        </div>
        <LineChart
          points={points}
          unit={measurement.unit}
          selected={selected}
          onSelect={setSelected}
        />
        {selected !== null && selected < points.length && (
          <div className="stat-card">
            <span>Điểm đo {selected + 1}</span>
            <strong>{points[selected]} {measurement.unit}</strong>
          </div>
        )}
        <div className="measurement-summary">
          <p>Số điểm: {points.length} <span>·</span> Trung bình: {average} {measurement.unit}</p>
          <label>
            Số điểm hiển thị: {count}
            <input
              type="range"
              min="3"
              max={measurement.points.length}
              value={count}
              onChange={(event) => {
                setCount(Number(event.target.value));
                setSelected(null);
              }}
            />
          </label>
        </div>
      </section>
    </div>
  );
}
