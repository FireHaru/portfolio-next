import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> VẬT LÝ TIN HỌC · AI · DỮ LIỆU</p>
        <h1>Từ dữ liệu<br />đến <em>ý tưởng.</em></h1>
        <p className="hero-intro">Xin chào, mình là <strong>Nguyễn Nhật Đăng.</strong></p>
        <p className="muted">
          Sinh viên Vật lý tin học, yêu thích khoa học và công nghệ. Mình khám phá
          cách lập trình và AI biến những bài toán thú vị thành sản phẩm thực tế.
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">Khám phá dự án <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#contact">Kết nối với mình →</a>
        </div>
        <div className="hero-notes" aria-label="Lĩnh vực quan tâm">
          <span>01 / Trí tuệ nhân tạo</span>
          <span>02 / Hình ảnh</span>
          <span>03 / Số liệu</span>
          <span>04 / Khoa học</span>
        </div>
      </div>

      <figure className="portrait-wrap">
        <div className="portrait-top">
          <span>MỘT CHÚT VỀ MÌNH</span>
          <span aria-hidden="true">↗</span>
        </div>
        <Image
          src="/assets/pics/avt.webp"
          alt="Nguyễn Nhật Đăng bên hồ"
          width={900}
          height={900}
          priority
        />
        <figcaption className="portrait-caption">
          <span><strong>Nguyễn Nhật Đăng</strong><small>Vật lý tin học</small></span>
          <span className="portrait-symbol" aria-hidden="true">✳</span>
        </figcaption>
      </figure>
    </section>
  );
}
