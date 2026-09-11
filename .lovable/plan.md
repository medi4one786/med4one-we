# Fix Cloudflare deployment

## Goal
Make the existing Med4One TanStack Start build deploy reliably from GitHub to Cloudflare without changing the website.

## Changes
- Keep the current Lovable Vite configuration, which already supplies TanStack, React, Tailwind, and Cloudflare-compatible server output. Do not add duplicate Vite plugins.
- Add a root Cloudflare configuration pointing to the actual generated worker entry (`dist/server/index.mjs`) and static assets (`dist/client`).
- Add Wrangler as a development dependency and a deployment script so Cloudflare does not auto-generate incompatible settings.
- Verify the local build produces the configured entry and asset directory, then check diagnostics.

## Cloudflare settings after the fix
- Build command: `bun run build`
- Deploy command: `bun run deploy`
- Root directory: repository root

## Scope
No visual, content, routing, branding, image, video, database, or authentication changes.
