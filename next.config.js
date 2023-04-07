/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/contentful',
        permanent: true,
      },
    ]
  },
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST : 'ep-fancy-moon-919397.us-east-2.aws.neon.tech',
    PGDATABASE : 'blog',
    PGUSER : 'ra.empric',
    PGPASSWORD :'pZLuK4J2bsSy',

    CONTENTFUL_SPACE_ID: "i4jgjype9bon",
    CONTENTFUL_ACCESS_KEY: "UhwjXl-mNq3BmA55Gh1_gjZrGEISO-cK1jhtwe3ec6Q",

    BASE_FETCH_URL: "http://localhost:3000"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig