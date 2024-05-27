/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['res.cloudinary.com', 'localhost', 'picsum.photos'] // <== Domain name
    }
}

module.exports = nextConfig
