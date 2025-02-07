import "@/styles/globals.css";
import "@/styles/mdx.css";
import "@/styles/syntax-highlighting.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import Layout from "@/components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </Layout>
  )
}
