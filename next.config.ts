import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@mapbox/node-pre-gyp': 'commonjs @mapbox/node-pre-gyp',
      });
    }
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules || []),
        {
          test: /node_modules\/@mapbox\/node-pre-gyp\/.*\.html$/,
          type: 'asset/resource',
        },
      ],
    };

    config.ignoreWarnings = [
      { module: /node_modules\/@mapbox\/node-pre-gyp/ },
    ];

    return config;
  },
  serverExternalPackages: ['@mapbox/node-pre-gyp', 'bcrypt'],
};

export default nextConfig;
