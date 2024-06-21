import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        PORT_BACKEND: process.env.PORT_BACKEND,
        KEY_OPENAI: process.env.KEY_OPENAI,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `http://localhost:${process.env.PORT_BACKEND}/api/:path*`, // Proxy to backend
            },
        ];
    },
    webpack(config, options) {
        // Custom webpack configurations
        return config;
    },
};

export default nextConfig;