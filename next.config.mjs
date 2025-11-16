import withMDX from "@next/mdx";

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default mdxConfig(nextConfig);
