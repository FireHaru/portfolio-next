'use client';

import { useEffect, useRef } from 'react';

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return undefined;

    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [project]);

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <>
          <div className="dialog-heading">
            <p className="eyebrow">CHI TIẾT DỰ ÁN</p>
            <button className="icon-button" type="button" aria-label="Đóng" onClick={onClose}>×</button>
          </div>
          <p className="project-category">{project.category}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
          <h3>Công nghệ</h3>
          <ul className="tag-list">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <p className="dialog-note">
            Mô tả tóm tắt theo danh mục dự án. Liên kết mã nguồn riêng chưa được cung cấp.
          </p>
          <a className="button" href="https://github.com/FireHaru" target="_blank" rel="noreferrer">
            Xem hồ sơ GitHub ↗
          </a>
        </>
      )}
    </dialog>
  );
}
