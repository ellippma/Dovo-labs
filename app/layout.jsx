import '../styles/colors_and_type.css';
import '../styles/dovo.css';
import '../styles/site.css';
import ScrollReset from '../components/ScrollReset';

export const metadata = {
  title: 'Dovo Labs — Ethan Lippman',
  description:
    'Go-to-market strategist, competitive intel nerd, and custom AI builder. I help companies wire actually working GTM strategies — then ship the bespoke AI tooling that runs them.',
  icons: {
    icon: '/dovo-labs-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><ScrollReset />{children}</body>
    </html>
  );
}
