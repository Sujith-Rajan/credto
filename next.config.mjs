/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {  
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
          },
          {
            protocol:'https',
            hostname:'www.gonoise.com',
          },
          {
            protocol:'https',
            hostname:'www.boat-lifestyle.com',
          },
          {
            protocol:'https',
            hostname:'imageio.forbes.com',
          },
          {
            protocol:'https',
            hostname:'encrypted-tbn0.gstatic.com',
          },
          {
            protocol:'https',
            hostname:'5.imimg.com',
          },
          {
            protocol:'https',
            hostname:'images-cdn.ubuy.co.in',
          }
        ],
      },
};

export default nextConfig;
