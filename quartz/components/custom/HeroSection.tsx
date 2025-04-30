const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Digital Garden</h1>
        <p className="hero-description">
          Khám phá và chia sẻ kiến thức qua khu vườn số của tôi. Nơi lưu giữ những suy nghĩ, bài
          viết và kinh nghiệm về lập trình, công nghệ và cuộc sống.
        </p>
        <div className="hero-cta">
          <a href="/blog" className="primary-button">
            Khám phá ngay
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
