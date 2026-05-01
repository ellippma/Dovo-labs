/* global React */

function DovoMarquee() {
  const items = [
    "★ GTM ENGINEERING",
    "● COMPETITIVE INTEL",
    "▲ REVOPS",
    "★ AI TOOLING",
    "● PIPELINE DISCIPLINE",
    "▲ FORECASTING THAT WORKS",
    "★ MAX RAD SCHEDULING",
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, k) => (
          <span key={k}>
            {items.map((it, i) => (
              <span key={i}>
                <span className="marquee-star">{it.slice(0, 1)}</span>
                {it.slice(2)}
                &nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { DovoMarquee });
