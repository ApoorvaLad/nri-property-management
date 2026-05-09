import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Use default output so /api routes work on Vercel (serverless).
   * Do not use output: "export" if you need the contact API — static export has no API routes. */
};

export default nextConfig;
