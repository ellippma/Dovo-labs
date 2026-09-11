import { NextResponse } from 'next/server';

// TEMPORARY: site is intentionally offline. Revert this commit to bring it back.
const body = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Temporarily unavailable</title>
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center;
         font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
         background:#0f0f10; color:#f5f5f4; text-align:center; padding:2rem; }
  h1 { font-size:1.25rem; font-weight:600; margin:0 0 .5rem; }
  p { margin:0; opacity:.6; font-size:.95rem; }
</style>
</head>
<body>
  <main>
    <h1>This site is temporarily unavailable.</h1>
    <p>Please check back soon.</p>
  </main>
</body>
</html>`;

export function middleware() {
  return new NextResponse(body, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
      'Cache-Control': 'no-store, must-revalidate',
    },
  });
}

export const config = {
  matcher: '/:path*',
};
