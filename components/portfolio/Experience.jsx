'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { activities, achievements, skills } from '../../data/activities.js';
import Gallery from './Gallery.jsx';

const softSkills = [
  ['Lãnh đạo & làm việc nhóm', 'Kết nối thành viên, phân công và phối hợp vì mục tiêu chung.'],
  ['Lập kế hoạch & tổ chức', 'Xây dựng chương trình, sắp xếp nguồn lực và theo dõi tiến độ.'],
  ['Giao tiếp & kết nối', 'Trao đổi, phối hợp các bên và truyền đạt thông tin rõ ràng.'],
  ['Giải quyết vấn đề', 'Linh hoạt xử lý tình huống, quản lý thời gian và trách nhiệm.'],
];

export function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 — BỘ CÔNG CỤ</p>
          <h2>Những gì mình sử dụng</h2>
        </div>
        <p className="muted">Học qua từng bài toán.<br />Phát triển qua từng dự án.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card surface-card" key={skill.title}>
            <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <ul className="tag-list">
              {skill.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Community() {
  const activitiesRef = useRef(null);

  function scrollActivities(direction) {
    const container = activitiesRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * container.clientWidth * 0.85,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <section className="content-section" id="activities">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 — KẾT NỐI & CỐNG HIẾN</p>
          <h2>Trưởng thành cùng cộng đồng</h2>
        </div>
        <p className="muted">Từ tổ chức hoạt động<br />đến kết nối con người.</p>
      </div>
      <article className="leadership-card">
        <div>
          <p className="eyebrow">KINH NGHIỆM CÔNG TÁC HỘI</p>
          <h3>Liên chi Hội trưởng</h3>
          <p className="leadership-faculty">Khoa Vật lý – Vật lý kỹ thuật</p>
        </div>
        <p>
          Trong vai trò Liên chi Hội trưởng, mình đã tham gia tổ chức các hoạt động
          dành cho sinh viên như Xuân tình nguyện, GreenDay và lễ tuyên dương Sinh
          viên 5 Tốt. Những trải nghiệm này giúp mình rèn luyện khả năng dẫn dắt,
          phối hợp tập thể và đưa kế hoạch thành hoạt động thực tế.
        </p>
      </article>
      <div className="soft-skills-grid">
        {softSkills.map(([title, description], index) => (
          <article key={title}>
            <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="subsection-heading">
        <div>
          <h3>Những hoạt động mình đã tổ chức</h3>
          <p className="muted">Mỗi chương trình là một cơ hội để học hỏi và đóng góp.</p>
        </div>
        {activities.length > 1 && (
          <div className="achievement-controls" aria-label="Điều khiển hoạt động">
            <button type="button" aria-label="Hoạt động trước" onClick={() => scrollActivities(-1)}>
              <span className="carousel-chevron carousel-chevron-prev" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Hoạt động tiếp theo" onClick={() => scrollActivities(1)}>
              <span className="carousel-chevron carousel-chevron-next" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div className="activity-grid" ref={activitiesRef}>
        {activities.map((activity) => (
          <article className="activity-card surface-card" key={activity.id}>
            <Gallery photos={activity.photos} alt={`Ảnh hoạt động ${activity.title}`} />
            <div className="activity-body">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  const achievementsRef = useRef(null);

  function scrollAchievements(direction) {
    const container = achievementsRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * container.clientWidth * 0.85,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <section className="content-section" id="achievements">
      <div className="section-heading">
        <div>
          <p className="eyebrow">05 — DẤU MỐC</p>
          <h2>Thành tích & ghi nhận</h2>
        </div>
        <p className="muted">Những dấu mốc từ quá trình học tập và cống hiến.</p>
        {achievements.length > 1 && (
          <div className="achievement-controls" aria-label="Điều khiển thành tích">
            <button type="button" aria-label="Thành tích trước" onClick={() => scrollAchievements(-1)}>
              <span className="carousel-chevron carousel-chevron-prev" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Thành tích tiếp theo" onClick={() => scrollAchievements(1)}>
              <span className="carousel-chevron carousel-chevron-next" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div className="achievement-grid" ref={achievementsRef}>
        {achievements.map((achievement) => (
          <article className="achievement-card surface-card" key={achievement.id}>
            <a
              className="certificate-link"
              href={achievement.image}
              target="_blank"
              rel="noreferrer"
              aria-label={`Mở ảnh chứng nhận: ${achievement.title}`}
            >
              <Image
                src={achievement.image}
                alt={`Ảnh ${achievement.kind}: ${achievement.title}`}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <span aria-hidden="true">Phóng to ↗</span>
            </a>
            <div className="activity-body">
              <p className="award-kind">{achievement.kind}</p>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
