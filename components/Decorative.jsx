export function Squiggle({ color = 'var(--pink)', width = 80, height = 16 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 80 16" style={{ display: 'block' }}>
      <path d="M 0 8 Q 10 0, 20 8 T 40 8 T 60 8 T 80 8" stroke={color} strokeWidth="3" fill="none" />
    </svg>
  );
}

export function Starburst({ size = 80, color = 'var(--yellow)', children, rotate = -8 }) {
  return (
    <div style={{
      position: 'relative',
      width: size, height: size,
      display: 'grid', placeItems: 'center',
      transform: `rotate(${rotate}deg)`,
    }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
        <polygon
          fill={color}
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinejoin="round"
          points="50,2 60,22 82,12 76,34 96,30 80,48 100,52 80,60 96,76 76,72 82,92 60,82 50,98 40,82 18,92 24,72 4,76 20,60 0,52 20,48 4,30 24,34 18,12 40,22"
        />
      </svg>
      <div style={{
        position: 'relative',
        fontFamily: 'var(--font-display)',
        fontSize: size * 0.18,
        textAlign: 'center',
        lineHeight: 1,
        color: 'var(--ink)',
      }}>{children}</div>
    </div>
  );
}

export function Triangle({ size = 30, color = 'var(--cyan)', rotate = 0, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      <polygon points="15,2 28,28 2,28" fill={color} stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Dot({ size = 14, color = 'var(--pink)', style }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      background: color,
      border: '2px solid var(--ink)',
      ...style,
    }} />
  );
}

export function ZigZag({ width = 100, color = 'var(--purple)' }) {
  return (
    <svg width={width} height="20" viewBox={`0 0 ${width} 20`}>
      <polyline
        points={Array.from({ length: Math.floor(width / 10) + 1 }, (_, i) =>
          `${i * 10},${i % 2 === 0 ? 4 : 16}`
        ).join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandMark({ size = 72 }) {
  return (
    <img
      src="/ygm-logo.png"
      alt="YouveGotMeetings"
      width={size}
      height={size}
      style={{
        display: 'block',
        flexShrink: 0,
        objectFit: 'contain',
        transform: 'rotate(-4deg)',
      }}
    />
  );
}
