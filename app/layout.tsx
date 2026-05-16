import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retro Console Component Finder',
  description: 'Find obsolete components for retro gaming projects. Database and marketplace for discontinued chips, displays, and components for homebrew retro console builds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a96b7443-e38d-4e95-b562-1301bf72da5f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-mono">
        {children}
      </body>
    </html>
  )
}
