// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['res.cloudinary.com'], // simple and works
//   },
// };

// module.exports = nextConfig;



// next.config.js
module.exports = {
  images: {
      unoptimized: true, 
    // For Next.js 13+
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Allows ALL Cloudinary images
      },
    ],
    // Also add domains for backward compatibility
    domains: ['res.cloudinary.com'],
  },
}