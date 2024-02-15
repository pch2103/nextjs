/** @type {import('next').NextConfig} */
const nextConfig =
    {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'strapi.cherenkov.xyz',
                    port: '',
                },
            ],
        },
    };
export default nextConfig;
