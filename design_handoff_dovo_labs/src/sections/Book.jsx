/* global React, ConfettiBg, Starburst */

function Book() {
  return (
    <section className="section book-section">
      <span id="book" className="anchor"></span>
      <ConfettiBg density={0.5} opacity={0.55} />
      <div style={{ position: "absolute", top: 40, left: 60, zIndex: 0 }}>
        <Starburst size={110} color="var(--yellow)" rotate={-12}>BOOK!</Starburst>
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="book-card">
          <div>
            <span className="book-eyebrow">★ POWERED BY YOU'VE GOT MEETINGS ★</span>
            <h2>Let's get<br/>on a call.</h2>
            <p className="book-lede">
              GTM engineering, competitive intel, AI tooling for your revenue
              org, or just a chat about the space. Pick a time — Claude will
              do the homework before we talk.
            </p>
            <a className="btn btn-pink"
               href="https://youvegotmeetings.com/book/ethan"
               target="_blank" rel="noopener"
               style={{ fontSize: 18, padding: "16px 28px" }}>
              Grab a slot → ethan
            </a>
            <div className="perms" style={{ marginTop: 18 }}>
              <span className="perm-line">▶ 30-MIN INTRO · NO SLIDES · NO PITCH</span>
              <span className="perm-line">▶ AGENDA DRAFTED BEFORE WE MEET</span>
              <span className="perm-line">▶ WE'LL FIGURE OUT IF I CAN HELP — CHILL</span>
            </div>
          </div>

          <div className="book-mockup">
            <div className="bm-header">▶ ETHAN.LIPPMAN — 30 MIN INTRO</div>
            <div className="bm-row">
              <span className="bm-time">TUE</span>
              <span>9:00 AM · 9:30 AM · 10:00 AM</span>
            </div>
            <div className="bm-row selected">
              <span className="bm-time">WED</span>
              <span><strong>2:00 PM</strong> · 2:30 PM · 3:00 PM ★</span>
            </div>
            <div className="bm-row">
              <span className="bm-time">THU</span>
              <span>10:00 AM · 11:00 AM · 4:00 PM</span>
            </div>
            <div className="bm-row">
              <span className="bm-time">FRI</span>
              <span>9:00 AM · 1:00 PM · 1:30 PM</span>
            </div>
            <a className="bm-cta"
               href="https://youvegotmeetings.com/book/ethan"
               target="_blank" rel="noopener">
              Looks good — book it ★
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Book });
