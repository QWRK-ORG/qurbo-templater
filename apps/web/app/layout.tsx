import { Inter, Roboto_Mono } from 'next/font/google'

import { Providers } from '@/components/providers'
import '@workspace/ui/globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
