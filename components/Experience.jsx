const EXP = [
  {
    when: '2022',
    range: '2022 — Present',
    co: 'Public fintech / banking SaaS',
    ticker: 'NASDAQ',
    role: 'VP, RevOps & AI GTM Engineering',
    tags: ['RevOps', 'AI', 'Forecasting', 'Enablement'],
    bullets: [
      'Architected the end-to-end revenue engine — 26%+ YoY growth, 20M+ platform users, first full year of positive Adjusted EBITDA (2024).',
      'Built a revenue-grade AI operating layer (codename: Elixir) unifying Salesforce, Gong, Slack, Gainsight, and external data — agents drive the full deal & account lifecycle.',
      'Instituted exec-grade forecasting, pipeline discipline, and board-level operating cadence; replaced spreadsheets with decision-ready intelligence.',
      'Scaled productivity through GTM systems and onboarding — cutting ramp ~40% while improving win rates and ICP coverage.',
      'Led RevOps integration for a strategic acquisition; trusted advisor to ELT and Board.',
    ],
    tilt: 'tilt-l',
  },
  {
    when: '2021',
    range: '2021 — 2022',
    co: 'Public digital experience platform',
    ticker: 'NASDAQ',
    role: 'Senior Director, GTM / Product Marketing',
    tags: ['GTM', 'PMM', 'Competitive'],
    bullets: [
      'Owned end-to-end GTM strategy for the flagship digital experience platform — Sales × Product × Marketing.',
      'Built and scaled a real-time competitive enablement platform — materially improved sales effectiveness in competitive enterprise deals.',
      'Established an exec GTM operating cadence with the CPO; led launches for Forums, Breakouts, hybrid events, and advanced analytics.',
      'Executive owner of Market Research, Win/Loss, Competitive Intelligence, and Voice of Customer.',
    ],
    tilt: 'tilt-r',
  },
  {
    when: '2020',
    range: '2020 — 2021',
    co: 'Enterprise work-management SaaS (acquired)',
    role: 'Director of Competitive Intelligence & GTM Strategy',
    tags: ['Competitive', 'M&A', 'Strategy'],
    bullets: [
      'Senior GTM and market strategy lead during a major enterprise software acquisition — supported diligence, integration, and post-close execution.',
      'Trusted advisor to the CEO on buying experience, market positioning, competitive threats, and product direction.',
      'Built and led the company\'s competitive intelligence function — real-time field enablement, exec briefings, and market insights.',
    ],
    tilt: 'tilt-l',
  },
  {
    when: '2017',
    range: '2017 — 2020',
    co: 'Major media & publishing group',
    role: 'Senior Product Manager — Audience Insights & Identity',
    tags: ['Product', 'Identity', 'Growth'],
    bullets: [
      'Led product across audience identity, growth, and monetization for a national digital media portfolio.',
      'Launched the company\'s SSO and identity platform — scaled to 2M+ users in year one.',
      'Built first-party data and identity platforms supporting advertiser value and revenue.',
      'Drove loyalty / rewards strategy; presented to global retail and brand leaders on data and monetization.',
    ],
    tilt: 'tilt-r',
  },
  {
    when: '2010',
    range: '2010 — 2017',
    co: 'Digital experience SaaS',
    role: 'Sales, Revenue & Product Leadership',
    tags: ['Product', 'Sales', 'SaaS'],
    bullets: [
      'Sole PM on the flagship platform — owned roadmap tightly aligned to Sales for commercial outcomes.',
      'Launched a net-new marketing automation product, expanding addressable market and unlocking new buyer personas.',
      'As AE: full-cycle enterprise SaaS sales — six- and low seven-figure contracts; consistent quota over-attainment.',
      'Built the foundation in pipeline, qualification, and forecasting that became the basis for later RevOps leadership.',
    ],
    tilt: 'tilt-l',
  },
];

export default function Experience() {
  return (
    <section className="section exp-section">
      <span id="experience" className="anchor"></span>
      <div className="wrap">
        <span className="eyebrow cyan">★ TRACK.RECORD ★</span>
        <h2 className="section-title">Where I&apos;ve put in the reps.</h2>
        <p className="section-sub">
          Enterprise SaaS, media, public companies, major acquisitions, and a long
          earlier run that taught me the engine from sales-floor to roadmap.
          Names redacted on purpose — happy to walk through specifics on a call.
        </p>

        <div className="exp-list">
          {EXP.map((e, i) => (
            <div key={i} className={'exp-card ' + e.tilt}>
              <div className="exp-when">
                <span className="when-year">{e.when}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: 1 }}>
                  {e.range}
                </span>
                <span className="when-co">
                  {e.co}
                  {e.ticker && <span className="ticker">{e.ticker}</span>}
                </span>
              </div>
              <div className="exp-body">
                <h3>{e.role}</h3>

                <ul>
                  {e.bullets.map((b, j) => (
                    <li key={j} className={j % 3 === 1 ? 'cyan' : j % 3 === 2 ? 'yellow' : ''}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
