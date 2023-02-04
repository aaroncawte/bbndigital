const ContentSecurityPolicy = `
  default-src 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
  script-src 'self' 'unsafe-inline' https://vercel.live/ https://vercel.com;
  connect-src 'self' https://vercel.live/ https://vercel.com https://vitals.vercel-insights.com/ https://sockjs-mt1.pusher.com/ wss://ws-mt1.pusher.com/;
  img-src 'self' data: blob: https://vercel.live/ https://vercel.com https://assets.vercel.com/ https://sockjs-mt1.pusher.com/;
  frame-src 'self' https://vercel.live/ https://vercel.com;
`;

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

module.exports = {
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
