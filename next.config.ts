import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Required for Docker standalone builds
  output: "standalone",

  // ✅ Optional but recommended
  reactStrictMode: true,

  // (Optional) You can add future or experimental flags if needed:
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
