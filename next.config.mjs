/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['picsum.photos', 'cloudflare-ipfs.com', 'loremflickr.com'],
    }
};

export default nextConfig;
