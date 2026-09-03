import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only. The regular Sites build continues to
  // use Vinext, while `npm run build:github` uses this export configuration.
  ...(isGitHubPagesBuild
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  // GitHub's export runs a dedicated application-only typecheck first. This
  // avoids Next.js trying to typecheck the Cloudflare-only support files.
  typescript: {
    ignoreBuildErrors: isGitHubPagesBuild,
  },
};

export default nextConfig;
