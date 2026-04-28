/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Evita bundles raros de lucide que a veces disparan "__webpack_modules__[moduleId] is not a function"
    optimizePackageImports: ["lucide-react"]
  },
  images: {
    // quality prop en <Image /> (p. ej. logos a 100); Next 15 avisa y en v16 será obligatorio
    qualities: [75, 85, 90, 95, 100]
  }
};

export default nextConfig;
