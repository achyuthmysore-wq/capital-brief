const withMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'jw'],
  strictMode: true,
};

module.exports = withMDX(nextConfig);