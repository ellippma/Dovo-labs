'use client';

import { BrandMark } from './Decorative';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'book', label: 'Book Time' },
];

export default function Nav() {
  const onClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <div className="top-nav">
      <a className="brand" href="#top" onClick={(e) => onClick(e, 'top')}>
        <BrandMark size={42} />
        <span>DOVO LABS</span>
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.id} href={'#' + l.id} onClick={(e) => onClick(e, l.id)}>{l.label}</a>
        ))}
        <a
          className="btn btn-pink"
          href="https://youvegotmeetings.com/book/ethan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '8px 14px', fontSize: 12 }}
        >
          Book me →
        </a>
      </div>
    </div>
  );
}
