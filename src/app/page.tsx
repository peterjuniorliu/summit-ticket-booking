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
            <div className="nav-actions">
              <a className="nav-button primary" href="/schedule">
                进入日程页面
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="venue">
        <p className="venue-address">
          <span className="venue-label">
            「参会地址」
          </span>
          北京海淀区北京朗丽兹西山花园酒店
        </p>          
      </div>
      <div className="venue">
        <p className="venue-address">
          <span className="venue-label">
            「参会时间」
          </span>
          2025年12月14日的上午09:00
        </p>
      </div>
    </main>
  );
}