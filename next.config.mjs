/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en', 'fr', 'pt-BR'],
  //   defaultLocale: 'en',
    
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   // domains: [
  //   //   {
  //   //     domain: 'localhost',
  //   //     defaultLocale: 'en-US',
  //   //   },
  //   //   {
  //   //     domain: 'example.com',
  //   //     defaultLocale: 'en-US',
  //   //   },
  //   //   {
  //   //     domain: 'example2.com',
  //   //     defaultLocale: 'pt-BR',
  //   //   },
  //   //   {
  //   //     domain: 'example.fr',
  //   //     defaultLocale: 'fr',
  //   //     // an optional http field can also be used to test
  //   //     // locale domains locally with http instead of https
  //   //     http: true,
  //   //   },
  //   // ],
  // },
  // reactStrictMode: false,
  images: {
    // loader: 'akamai',
    // path: '/assets/images',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextui.org',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
