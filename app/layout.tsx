import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terminal Portfolio',
  description: 'A terminal-style portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen p-4">
        {children}
      </body>
    </html>
  )
}

