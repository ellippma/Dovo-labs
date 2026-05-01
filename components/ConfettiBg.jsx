'use client';

import { useState, useEffect } from 'react';
import { Triangle } from './Decorative';

function makeItems(density) {
  const colors = ['var(--pink)', 'var(--cyan)', 'var(--yellow)', 'var(--purple)', 'var(--orange)', 'var(--green)'];
  const n = Math.floor(40 * density);
  return Array.from({ length: n }, (_, i) => ({
    key: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    rot: Math.random() * 360,
    shape: ['dot', 'tri', 'sq', 'line'][Math.floor(Math.random() * 4)],
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 6 + Math.random() * 14,
  }));
}

export default function ConfettiBg({ density = 1, opacity = 1 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(makeItems(density));
  }, [density]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity }}>
      {items.map(it => {
        const common = {
          position: 'absolute',
          top: `${it.top}%`,
          left: `${it.left}%`,
          transform: `rotate(${it.rot}deg)`,
        };
        if (it.shape === 'dot') return (
          <div key={it.key} style={{ ...common, width: it.size, height: it.size, borderRadius: '50%', background: it.color, border: '1.5px solid var(--ink)' }} />
        );
        if (it.shape === 'tri') return (
          <div key={it.key} style={common}><Triangle size={it.size} color={it.color} /></div>
        );
        if (it.shape === 'sq') return (
          <div key={it.key} style={{ ...common, width: it.size, height: it.size, background: it.color, border: '1.5px solid var(--ink)' }} />
        );
        return (
          <div key={it.key} style={{ ...common, width: it.size * 1.5, height: 3, background: it.color, border: '1.5px solid var(--ink)' }} />
        );
      })}
    </div>
  );
}
