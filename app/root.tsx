import type { MetaFunction } from '@remix-run/node';
import * as Remix from '@remix-run/react';

type Location = Remix.Location & { state: { restoreScroll?: boolean } };

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const location = Remix.useLocation() as Location;
  const restoreScroll = location.state?.restoreScroll ?? true;
  return (
    <html lang="en">
      <head>
        <Remix.Meta />
        <Remix.Links />
      </head>
      <body style={{ padding: 0, maxWidth: 900, margin: '0 auto' }}>
        <Remix.Outlet />
        {restoreScroll && <Remix.ScrollRestoration />}
        <Remix.Scripts />
        <Remix.LiveReload />
      </body>
    </html>
  );
}
