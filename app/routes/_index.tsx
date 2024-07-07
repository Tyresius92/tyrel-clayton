import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <main>
      <h1>Tyrel Clayton&apos;s Personal Site</h1>
    </main>
  );
}
