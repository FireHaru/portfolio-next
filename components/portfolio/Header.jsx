'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';

const navigation = [
  ['about', 'Về mình', '/#about'],
  ['skills', 'Kỹ năng', '/#skills'],
  ['projects', 'Dự án'],
  ['measurements', 'Số liệu', '/#measurements'],
  ['activities', 'Hoạt động', '/#activities'],
  ['achievements', 'Thành tích', '/#achievements'],
  ['repositories', 'Repo', '/#repositories'],
  ['contact', 'Liên hệ', '/#contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setProjectsOpen(false);
      }
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">Đ.</span>
        <span>Nhật Đăng<small>/ portfolio</small></span>
      </Link>

      <nav
        id="primary-navigation"
        className={menuOpen ? 'site-nav is-open' : 'site-nav'}
        aria-label="Điều hướng chính"
      >
        {navigation.map(([id, label, href]) => id === 'projects' ? (
          <details
            key={id}
            className="nav-dropdown"
            open={projectsOpen}
            onToggle={(event) => setProjectsOpen(event.currentTarget.open)}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setProjectsOpen(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse') setProjectsOpen(false);
            }}
          >
            <summary
              className="nav-dropdown-trigger"
              aria-expanded={projectsOpen}
              onClick={(event) => {
                if (
                  event.nativeEvent.detail > 0
                  && window.matchMedia('(hover: hover)').matches
                ) {
                  event.preventDefault();
                }
              }}
            >
              {label}
            </summary>
            <div className="nav-dropdown-menu">
              <Link href="/#projects" onClick={() => {
                setMenuOpen(false);
                setProjectsOpen(false);
              }}>
                Dự án nổi bật
              </Link>
              <Link href="/projects" onClick={() => {
                setMenuOpen(false);
                setProjectsOpen(false);
              }}>
                Danh sách dự án
              </Link>
            </div>
          </details>
        ) : (
          <Link
            key={id}
            href={href}
            onClick={() => {
              setMenuOpen(false);
              setProjectsOpen(false);
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} strokeWidth={1.75} aria-hidden="true" /> : '☰'}
        </button>
      </div>
    </header>
  );
}
