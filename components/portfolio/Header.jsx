'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle.jsx';

const navigation = [
  ['about', 'Về mình', '/#about'],
  ['skills', 'Kỹ năng', '/#skills'],
  ['projects', 'Dự án', '/#projects'],
  ['measurements', 'Số liệu', '/#measurements'],
  ['activities', 'Hoạt động', '/#activities'],
  ['achievements', 'Thành tích', '/#achievements'],
  ['repositories', 'Repo', '/#repositories'],
  ['contact', 'Liên hệ', '/#contact'],
  ['projects-page', 'Danh sách dự án', '/projects'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
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
        {navigation.map(([id, label, href]) => (
          <Link key={id} href={href} onClick={() => setMenuOpen(false)}>
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
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
