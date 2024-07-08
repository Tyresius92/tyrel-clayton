import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";

export const links: LinksFunction = () => [];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{margin: 0}}>
        <nav>
          <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#d0d0d0', padding: 16}}>
            <div>
              <Link to="/">
                Tyrel Clayton
              </Link>
            </div>
            <div>
              More links will go here eventually
            </div>
          </div>
        </nav>
        <main style={{padding: 16}}>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
