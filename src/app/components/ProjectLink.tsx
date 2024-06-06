'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function ProjectLink() {
	const pathname = usePathname()
	return (
		<Link key='Projects' href='/projects' className={clsx()}>
			{/* <div className='flex rounded px-20 select-none py-8 items-center bg-gray-500 hover:bg-sky-100 hover:text-blue-600'> */}
			<div
				className='flex py-5 px-14 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-white text-sm font-semibold rounded-md
				shadow-lg shadow-violet-400/70 focus:outline-none'
			>
				<p className='text-lg text-center'>Projects</p>
			</div>
		</Link>
	)
}
