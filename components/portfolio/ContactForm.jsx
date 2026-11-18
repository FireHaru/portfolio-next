'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus('');
  }

  async function submit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Chưa nhập họ tên';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Email chưa hợp lệ';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Lời nhắn cần ít nhất 10 ký tự';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setStatus('Đang gửi lời nhắn…');
    try {
      const response = await fetch('https://formsubmit.co/ajax/nguyennhatdang89@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: 'Lời nhắn mới từ portfolio Nhật Đăng',
          _template: 'table',
        }),
      });
      const result = await response.json();
      if (!response.ok || ![true, 'true'].includes(result.success)) {
        throw new Error('Dịch vụ chưa xác nhận gửi lời nhắn.');
      }

      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setStatus('Đã gửi lời nhắn. Cảm ơn bạn đã liên hệ!');
    } catch (error) {
      setStatus(`${error.message} Nội dung vẫn được giữ lại; bạn có thể thử lại.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="content-section contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">BẮT ĐẦU MỘT CUỘC TRÒ CHUYỆN</p>
        <h2>Có một ý tưởng?<br /><em>Cùng trao đổi nhé.</em></h2>
        <p className="muted">Kết nối để chia sẻ về lập trình, dữ liệu hoặc một dự án thú vị.</p>
        <div className="contact-links">
          <a href="https://github.com/FireHaru" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-nguy%E1%BB%85n-6239a1160/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <form className="contact-form surface-card" onSubmit={submit} aria-busy={isSubmitting}>
        <h3>Gửi lời nhắn</h3>
        <label htmlFor="contact-name">Tên của bạn</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          maxLength="100"
          value={form.name}
          onChange={update}
          aria-invalid={Boolean(errors.name)}
          required
          placeholder="Họ và tên"
        />
        {errors.name && <p className="form-error" role="alert">{errors.name}</p>}

        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength="200"
          value={form.email}
          onChange={update}
          aria-invalid={Boolean(errors.email)}
          required
          placeholder="name@example.com"
        />
        {errors.email && <p className="form-error" role="alert">{errors.email}</p>}

        <label htmlFor="contact-message">Lời nhắn</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          minLength="10"
          maxLength="3000"
          value={form.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          required
          placeholder="Mình muốn trao đổi về…"
        />
        {errors.message && <p className="form-error" role="alert">{errors.message}</p>}

        <p className="form-note">
          Khi gửi, thông tin sẽ được chuyển qua FormSubmit đến email liên hệ.
        </p>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Đang gửi…' : 'Gửi lời nhắn ↗'}
        </button>
        {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
      </form>
    </section>
  );
}
