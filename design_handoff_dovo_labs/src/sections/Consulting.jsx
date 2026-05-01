/* global React */

const ENGAGEMENTS = [
  {
    icon: "♥",
    iconClass: "pink",
    shadow: "shadow-pink",
    tilt: "tilt-l",
    title: "Healthcare SaaS",
    body: "GTM engineering and revenue ops design for a clinical workflow platform. Forecast cadence, pipeline hygiene, and an AI assist for clinical buyer research.",
    tags: ["GTM Engineering", "RevOps", "Forecasting"],
  },
  {
    icon: "▲",
    iconClass: "cyan",
    shadow: "shadow-yellow",
    tilt: "tilt-r",
    title: "Robotics / Industrial AI",
    body: "Competitive intelligence framework + market landscape work for an enterprise robotics company. ICP segmentation, pricing signals, win/loss insight.",
    tags: ["Competitive Intel", "Strategy", "Win/Loss"],
  },
  {
    icon: "★",
    iconClass: "yellow",
    shadow: "shadow-pink",
    tilt: "tilt-r",
    title: "Work Management Platform",
    body: "AI strategy and competitive positioning during a market re-positioning push. Built the playbook that the field actually used in deals.",
    tags: ["AI Strategy", "Positioning", "Field Enablement"],
  },
  {
    icon: "●",
    iconClass: "green",
    shadow: "shadow-green",
    tilt: "tilt-l",
    title: "B2B SaaS — Multiple",
    body: "Across a half-dozen B2B SaaS engagements: bespoke AI tooling for sales coaching, account research, and deal-cycle automation. Always tied to revenue, never to demo-ware.",
    tags: ["Custom AI Tools", "Sales Coaching", "Account Research"],
  },
];

function Consulting() {
  return (
    <section className="section cons-section">
      <span id="consulting" className="anchor"></span>
      <div className="wrap">
        <span className="eyebrow yellow">★ CONSULTING.LOG ★</span>
        <h2 className="section-title">Engagements.</h2>
        <p className="section-sub">
          Names redacted on purpose — most of this work touched live revenue
          strategy, M&amp;A, or unreleased product. Here's the shape of it.
        </p>

        <div className="cons-grid">
          {ENGAGEMENTS.map((e, i) => (
            <div key={i} className={"cons-card " + e.tilt + " " + e.shadow}>
              <div className={"cons-icon " + e.iconClass}>{e.icon}</div>
              <div style={{ flex: 1 }}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <div className="cons-tags">
                  {e.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 36,
          background: "var(--ink)",
          color: "var(--cream)",
          border: "3px solid var(--cream)",
          padding: "18px 24px",
          fontFamily: "var(--font-mono)",
          fontSize: 17,
          letterSpacing: 1,
          maxWidth: 720,
        }}>
          ▶ NEED THIS FOR YOUR TEAM?{" "}
          <a href="https://youvegotmeetings.com/book/ethan"
             target="_blank" rel="noopener"
             style={{ color: "var(--yellow)", borderBottom: "2px solid var(--yellow)", textDecoration: "none" }}>
            Book 30 minutes with me →
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Consulting });
