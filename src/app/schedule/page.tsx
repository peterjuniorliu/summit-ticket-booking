import schedule from "../../../schedule.json";

type ScheduleData = typeof schedule;

const data = schedule as ScheduleData;
const trackNames = data.tracks;
const items = data.items;
const totalSessions = items.reduce((acc, item) => acc + item.tracks.length, 0);

export default function SchedulePage() {
  return (
    <main>
      <div className="page-content">
        <section className="hero">
          <div className="hero-card">
            <div className="hero-header">
              <h1 className="hero-title">AI Maker Summit · Schedule</h1>
              <div className="nav-actions">
                <a className="nav-button primary" href="/">
                  返回首页
                </a>
              </div>
            </div>
            <p className="hero-text">
              一天三大会场，连续八段主题分享，从大模型研发到应用落地，再到内容与
              创业思考。挑选你最关注的赛道，把灵感带回去。
            </p>
          </div>
          <div className="stats">
            <div className="stat-card">
              <div className="stat-value">{trackNames.length}</div>
              <div className="stat-label">并行会场</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{items.length}</div>
              <div className="stat-label">时间段</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalSessions}</div>
              <div className="stat-label">演讲主题</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">09:00</div>
              <div className="stat-label">开场时间</div>
            </div>
          </div>
        </section>

        <section className="track-strip">
          {trackNames.map((track) => (
            <span key={track} className="tag">
              {track}
            </span>
          ))}
        </section>

        <section className="schedule-board">
          <div className="board-header">
            <span className="time-cell">Time</span>
            {trackNames.map((track) => (
              <span key={track}>{track}</span>
            ))}
          </div>
          {items.map((slot) => (
            <div className="board-row" key={slot.time}>
              <div className="time-pill">{slot.time}</div>
              {trackNames.map((trackName, index) => {
                const session = slot.tracks[index];
                if (!session) {
                  return (
                    <div className="session-card" key={`${slot.time}-${trackName}`}>
                      <div className="session-track">{trackName}</div>
                      <div className="session-title">待公布</div>
                    </div>
                  );
                }
                const speakerUrl = new URL(session.speaker_page, data.source).toString();
                return (
                  <article className="session-card" key={`${slot.time}-${trackName}`}>
                    <div className="session-track">{trackName}</div>
                    <div className="session-title">{session.title}</div>
                    <div className="session-speaker">
                      <a href={speakerUrl} target="_blank" rel="noreferrer">
                        {session.speaker.name}
                      </a>
                    </div>
                    <div className="session-role">{session.speaker.role}</div>
                  </article>
                );
              })}
            </div>
          ))}
        </section>

        <div className="footer-note">
          数据来源：{data.source}
        </div>
      </div>
    </main>
  );
}
