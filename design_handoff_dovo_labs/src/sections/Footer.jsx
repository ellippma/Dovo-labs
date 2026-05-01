/* global React */

function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-mark">★ DOVO LABS ★</div>
      <div className="ft-tag">Ethan Lippman · GTM × AI × Competitive Intel</div>
      <div className="ft-links">
        <a href="https://www.linkedin.com/in/ethanlippman/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://youvegotmeetings.com" target="_blank" rel="noopener">You've Got Meetings</a>
        <a href="https://youvegotmeetings.com/book/ethan" target="_blank" rel="noopener">Book Time →</a>
      </div>
      <div className="ft-copy">© 1995–2026 — Dovo Labs. Save the dates.</div>
    </footer>
  );
}

Object.assign(window, { Footer });
