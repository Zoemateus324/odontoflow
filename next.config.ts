import type { NextConfig } from "next";

const securityHeaders: { key: string; value: string }[] = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://translate.googleapis.com;
      style-src 'self' 'unsafe-inline' https://www.gstatic.com;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self';
      img-src 'self' data:;
    `.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
