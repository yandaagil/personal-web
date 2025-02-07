import withMDX from "@next/mdx";

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default mdxConfig({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
