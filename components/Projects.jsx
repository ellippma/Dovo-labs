'use client';

import Image from 'next/image';
import { Starburst } from './Decorative';

export default function Projects() {
  return (
    <section className="section">
      <span id="projects" className="anchor"></span>
      <div className="wrap">
        <span className="eyebrow yellow">★ PROJECTS.DIR ★</span>
        <h2 className="section-title">Things I&apos;ve built.</h2>
        <p className="section-sub">
          Some shipped, some retired, some still cooking. The unifying thread:
          AI that does the homework so the human shows up smarter.
        </p>

        <div className="proj-grid proj-grid-2">

          {/* 1 — You've Got Meetings */}
          <div className="proj-card pink tilt-l">
            <div className="corner-burst">
              <Starburst size={72} color="var(--yellow)" rotate={14}>LIVE</Starburst>
            </div>
            <div>
              <span className="proj-tag">▶ APP.LIVE</span>
              <h3>You&apos;ve Got<br />Meetings</h3>
              <div className="proj-sub">★ The flagship</div>
              <p>
                Calendly&apos;s tubular cousin. Claude researches your guest from
                public sources, drafts a tailored agenda, and makes every
                booking actually worth showing up to. (Codename: Claudendly.)
              </p>
            </div>
            <a
              className="proj-link"
              href="https://youvegotmeetings.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              youvegotmeetings.com →
            </a>
          </div>

          {/* 2 — WordUp AI */}
          <div className="proj-card yellow tilt-r">
            <div className="corner-burst">
              <Starburst size={72} color="var(--pink)" rotate={-10}>LIVE</Starburst>
            </div>
            <div>
              <span className="proj-tag">▶ APP.LIVE</span>
              <h3>WordUp AI</h3>
              <div className="proj-sub">★ Text to ears</div>
              <p>
                Any article, PDF, or URL — turned into audio with AI voices
                that actually have personality. Nine voices, MP3 downloads,
                bookmark your spot. Why read when you can listen?
              </p>
            </div>
            <a
              className="proj-link"
              href="https://wordupai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wordupai.com →
            </a>
          </div>

          {/* 3 — Alfred */}
          <div className="proj-card purple tilt-l">
            <div className="corner-burst">
              <Starburst size={72} color="var(--yellow)" rotate={14}>LIVE</Starburst>
            </div>
            <div>
              <Image
                src="/alfred-logo.png"
                alt="Alfred logo"
                width={52}
                height={52}
                className="proj-logo"
              />
              <span className="proj-tag">▶ OPEN SOURCE</span>
              <h3>Alfred</h3>
              <div className="proj-sub">★ Your AI chief of staff</div>
              <p>
                A personal executive assistant that lives inside Claude Code.
                Pulls from your calendar, Slack, email, and meeting transcripts
                to deliver smart daily briefings — so you walk in already
                knowing what matters.
              </p>
            </div>
            <a
              className="proj-link"
              href="https://github.com/ellippma/Alfred-Public"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ellippma/Alfred-Public →
            </a>
          </div>

          {/* 4 — Dovo */}
          <div className="proj-card cyan tilt-r">
            <div>
              <span className="proj-tag">▶ ARCHIVE</span>
              <h3>Dovo</h3>
              <div className="proj-sub">★ Retired — RIP</div>
              <p>
                A competitive intelligence Slackbot. Ingested win/loss, deal
                rooms, and battle cards; surfaced the right counter at the
                right moment in the rep&apos;s actual workflow. The seed of how I
                think about AI in revenue today.
              </p>
            </div>
            <span className="proj-link" style={{ opacity: 0.45, cursor: 'default' }}>
              Case study soon →
            </span>
          </div>

          {/* 5 — Placeholder */}
          <div className="proj-card placeholder">
            <div className="ph-inner">
              <div className="ph-question">???</div>
              <div>
                <div className="ph-label">MORE TO COME</div>
                <div className="ph-sub">★ COOKING IN THE LAB ★</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
