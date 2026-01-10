export default function HomePage() {
  return (
    <main>
      <div className="page-content">
        <section className="hero">
          <div className="hero-card">
            <h1 className="hero-title">AI Maker Summit</h1>
            <p className="hero-text">
              欢迎来到大会主页。你可以从这里进入日程安排页面查看详细会场议程。
            </p>
            <div className="hero-tags">
              <a className="tag" href="/schedule">
                查看 Schedule
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
