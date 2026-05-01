/* global React, ConfettiBg, Starburst, ZigZag, Triangle, Dot, Squiggle */

function Hero({ tweaks }) {
  const density = tweaks?.confettiDensity ?? 0.8;
  const accent = tweaks?.heroAccent ?? "pink";
  const accentClass = accent === "cyan" ? "accent-cyan" : "accent-pink";

  return (
    <section id="top" className="hero">
      <ConfettiBg density={density} opacity={0.7} />
      <div style={{ position: "absolute", top: 110, right: 60, zIndex: 0 }}>
        <Starburst size={130} color="var(--yellow)" rotate={12}>HOWDY!</Starburst>
      </div>
      <div style={{ position: "absolute", bottom: 60, left: 40 }}>
        <ZigZag width={160} color="var(--purple)" />
      </div>
      <div style={{ position: "absolute", top: 40, left: 40 }}>
        <Triangle size={42} color="var(--cyan)" rotate={18} />
      </div>

      <div className="hero-grid">
        <div>
          <a href="https://youvegotmeetings.com/book/ethan"
             target="_blank" rel="noopener"
             style={{
               display: "inline-flex",
               alignItems: "center",
               gap: 10,
               background: "var(--pink)",
               color: "var(--ink)",
               padding: "10px 18px",
               fontFamily: "var(--font-display)",
               fontSize: 14,
               letterSpacing: 1.5,
               border: "3px solid var(--ink)",
               boxShadow: "4px 4px 0 var(--ink)",
               textDecoration: "none",
               transform: "rotate(-2deg)",
               marginBottom: 24,
               textTransform: "uppercase",
             }}>
            ★ Book 30 min with me → ethan
          </a>

          <h1 className="hero-mega">
            ETHAN<br/>
            <span className={accentClass}>LIPPMAN.</span>
          </h1>

          <p className="hero-tagline">
            Go-to-market strategist, competitive intel nerd, and AI builder.
            I help companies wire <em>actually working</em> revenue engines —
            then ship the bespoke AI tooling that runs them.
          </p>

          <div style={{
            background: "var(--ink)",
            color: "var(--yellow)",
            border: "3px solid var(--ink)",
            padding: "14px 18px",
            fontFamily: "var(--font-mono)",
            fontSize: 17,
            letterSpacing: 1,
            maxWidth: 540,
            marginBottom: 24,
            boxShadow: "6px 6px 0 var(--cyan)",
          }}>
            ▶ THE FASTEST WAY TO GET VALUE OUT OF THIS PAGE:{" "}
            <a href="https://youvegotmeetings.com/book/ethan"
               target="_blank" rel="noopener"
               style={{ color: "var(--pink)", borderBottom: "2px solid var(--pink)", textDecoration: "none" }}>
              put time on my calendar
            </a>.
          </div>

          <div className="hero-cta-row">
            <a className="btn btn-pink"
               href="https://youvegotmeetings.com/book/ethan"
               target="_blank" rel="noopener"
               style={{ fontSize: 16, padding: "14px 24px" }}>
              Book a meeting →
            </a>
            <a className="btn btn-ghost"
               href="#projects"
               onClick={(e) => { e.preventDefault(); document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" }); }}
               style={{ fontSize: 14 }}>
              See what I built
            </a>
            <span className="hero-stat">
              <span style={{ color: "var(--pink)" }}>♥</span> 15+ years GTM &amp; product
            </span>
          </div>
        </div>

        <div className="avatar-card">
          <span className="avatar-name">★ ETHAN.JPG</span>
          <img src="assets/ethan-avatar.png" alt="Ethan Lippman" />
          <span className="avatar-tag">RevOps · AI · GTM</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
