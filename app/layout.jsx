import '../styles/colors_and_type.css';
import '../styles/dovo.css';
import '../styles/site.css';

export const metadata = {
  title: 'Dovo Labs — Ethan Lippman',
  description:
    'Go-to-market strategist, competitive intel nerd, and AI builder. I help companies wire actually working revenue engines — then ship the bespoke AI tooling that runs them.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
