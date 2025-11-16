import "@/styles/globals.css"
import "@/styles/mdx.css"
import "@/styles/syntax-highlighting.css"
import type { AppProps } from "next/app"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Roboto_Mono } from 'next/font/google'
import Layout from "@/components/layout"
import { ThemeProvider } from "next-themes"

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${robotoMono.style.fontFamily};
        }
      `}</style>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
