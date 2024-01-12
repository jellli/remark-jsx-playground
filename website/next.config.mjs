import createMDX from '@next/mdx'
import remarkJsxPlayground from 'remark-jsx-playground'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkJsxPlayground],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)