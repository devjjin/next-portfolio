import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jjin portfolio',
  description: '수진의 포트폴리오',
  keywords: ["포트폴리오", "리액트", "넥스트", "devjjin", "portfolio","devjjin"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
