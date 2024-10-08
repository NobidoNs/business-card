import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NobidoN ',
	description: 'Business-card',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<link rel='icon' href='/N_Logo.png' sizes='any' />
			<body className={inter.className}>{children}</body>
		</html>
	)
}
