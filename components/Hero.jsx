'use client';

import ConfettiBg from './ConfettiBg';
import { Starburst, ZigZag, Triangle } from './Decorative';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <ConfettiBg density={0.8} opacity={0.7} />
      <div style={{ position: 'absolute', top: 110, right: 60, zIndex: 0 }}>
        <Starburst size={130} color="var(--yellow)" rotate={12}>HOWDY!</Starburst>
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: 40 }}>
        <ZigZag width={160} color="var(--purple)" />
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40 }}>
        <Triangle size={42} color="var(--cyan)" rotate={18} />
      </div>

      <div className="hero-grid">
        <div>
          <a
            href="https://youvegotmeetings.com/book/ethan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--pink)',
              color: 'var(--ink)',
              padding: '10px 18px',
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              letterSpacing: 1.5,
              border: '3px solid var(--ink)',
              boxShadow: '4px 4px 0 var(--ink)',
              textDecoration: 'none',
              transform: 'rotate(-2deg)',
              marginBottom: 24,
              textTransform: 'uppercase',
            }}
          >
            ★ Book 30 min with me → ethan
          </a>

          <h1 className="hero-mega">
            ETHAN<br />
            <span className="accent-pink">LIPPMAN.</span>
          </h1>

          <p className="hero-tagline">
            Go-to-market strategist, competitive intel nerd, and custom AI builder.
            I help companies wire <em>actually working</em> GTM strategies —
            then ship the bespoke AI tooling that runs them.
          </p>

          <div style={{
            background: 'var(--ink)',
            color: 'var(--yellow)',
            border: '3px solid var(--ink)',
            padding: '14px 18px',
            fontFamily: 'var(--font-mono)',
            fontSize: 17,
            letterSpacing: 1,
            maxWidth: 540,
            marginBottom: 24,
            boxShadow: '6px 6px 0 var(--cyan)',
          }}>
            ▶ THE FASTEST WAY TO GET VALUE OUT OF THIS PAGE:
            <br />
            <a
              href="https://youvegotmeetings.com/book/ethan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--pink)', borderBottom: '2px solid var(--pink)', textDecoration: 'none' }}
            >
              put time on my calendar
            </a>.
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignSelf: 'start', justifySelf: 'end' }}>
          <div className="avatar-card">
            <span className="avatar-name">★ ETHAN.JPG</span>
            <img src="/ethan-avatar.png" alt="Ethan Lippman" />
            <span className="avatar-tag">RevOps · AI · GTM</span>
          </div>
          <div className="hero-cta-row" style={{ justifyContent: 'flex-start', marginTop: 8 }}>
            <a
              className="btn btn-pink"
              href="https://youvegotmeetings.com/book/ethan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 16, padding: '14px 24px' }}
            >
              Book a meeting →
            </a>
            <a
              className="btn btn-ghost"
              href="#consulting"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              style={{ fontSize: 14 }}
            >
              Check out my consulting.log
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
