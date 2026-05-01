const EXP = [
  {
    when: '2022',
    range: '2022 — Present',
    co: 'Public fintech / banking SaaS',
    ticker: 'NASDAQ',
    role: 'VP, RevOps & AI GTM Engineering',
    tags: ['RevOps', 'AI', 'Forecasting', 'Enablement'],
    bullets: [
      'Took a messy, duct-taped GTM motion and turned it into a revenue engine that actually runs — clean, connected, and built to scale.',
      'Built the AI layer behind the business — systems, signals, and workflows working together so deals move faster and teams aren\'t guessing.',
      'Put an end to "forecast by vibes" — real pipeline discipline, real cadence, real numbers.',
      'Turned onboarding and enablement into a cheat code — reps ramp faster, focus tighter, and win more.',
      'Led through a major acquisition without the usual chaos — aligning tech, data, and teams while keeping the engine moving.',
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
      'Owned the GTM engine for a flagship platform — aligning sales, product, and marketing into one motion that actually worked.',
      'Built a real-time competitive enablement system — giving reps the edge in high-stakes enterprise deals (not just static battlecards).',
      'Established exec-level GTM cadence — partnering with product leadership to launch, iterate, and keep the entire motion moving.',
      'Led major product launches across events, hybrid, and analytics — making sure what got built actually got sold.',
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
      'Played a central role in a major enterprise SaaS acquisition — driving GTM and market strategy from diligence through integration and beyond.',
      'Trusted advisor to the CEO — shaping positioning, competitive strategy, and product direction based on how deals are actually won and lost.',
      'Built the competitive intelligence function from scratch — turning it into a real-time weapon for sales, execs, and product teams.',
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
      'Launched the company\'s identity and SSO platform — establishing the foundation for how users are understood, engaged, and monetized.',
      'Turned loyalty and rewards into a growth lever — driving repeat engagement and deeper audience relationships.',
      'Brought product and data to the front lines — presenting strategy and insights to major brands and partners who relied on it to make decisions.',
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
      'Started on the front lines — owning full-cycle enterprise sales and learning how deals actually get won (and lost).',
      'Consistently closed complex deals — building a reputation for navigating big accounts and getting them over the line.',
      'Moved into product — owning the roadmap for a flagship platform with a direct line to commercial outcomes.',
      'Launched a net-new marketing automation product — opening new markets and expanding who the company could sell to.',
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
