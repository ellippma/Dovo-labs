/* global React, Starburst */

function Projects() {
  return (
    <section className="section">
      <span id="projects" className="anchor"></span>
      <div className="wrap">
        <span className="eyebrow yellow">★ PROJECTS.DIR ★</span>
        <h2 className="section-title">Things I've built.</h2>
        <p className="section-sub">
          Some shipped, some retired, some still cooking. The unifying thread:
          AI that does the homework so the human shows up smarter.
        </p>

        <div className="proj-grid">
          {/* Claudendly / YouveGotMeetings */}
          <div className="proj-card pink tilt-l">
            <div className="corner-burst">
              <Starburst size={80} color="var(--yellow)" rotate={14}>LIVE</Starburst>
            </div>
            <div>
              <span className="proj-tag">▶ APP.LIVE</span>
              <h3>You've Got<br/>Meetings</h3>
              <div className="proj-sub">★ The flagship</div>
              <p>
                Calendly's tubular cousin. Claude researches your guest from
                public sources, drafts a tailored agenda, and makes every
                booking actually worth showing up to. (Codename: Claudendly.)
              </p>
            </div>
            <a className="proj-link"
               href="https://youvegotmeetings.com"
               target="_blank" rel="noopener">
              youvegotmeetings.com →
            </a>
          </div>

          {/* Dovo */}
          <div className="proj-card cyan tilt-r">
            <div>
              <span className="proj-tag">▶ ARCHIVE</span>
              <h3>Dovo</h3>
              <div className="proj-sub">★ Retired — RIP</div>
              <p>
                A competitive intelligence Slackbot. Ingested win/loss, deal
                rooms, and battle cards; surfaced the right counter at the
                right moment in the rep's actual workflow. The seed of how I
                think about AI in revenue today.
              </p>
            </div>
            <a className="proj-link"
               href="#"
               onClick={(e) => e.preventDefault()}>
              Case study soon →
            </a>
          </div>

          {/* Coming soon */}
          <div className="proj-card placeholder tilt-l">
            <div className="ph-inner">
              <div style={{ fontFamily: "var(--font-display-alt)", fontSize: 56, color: "var(--purple)", lineHeight: 1, marginBottom: 8 }}>
                ???
              </div>
              MORE TO COME
              <div className="ph-sub">★ COOKING IN THE LAB ★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects });
