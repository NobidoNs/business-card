'use client'

import Link from 'next/link'
import clsx from 'clsx'

export default function ProjectLink() {
	return (
		<Link key='Projects' href='#projects' className={clsx()}>
			<div
				className='select-none rotate-x-[deg] rotate-y-[6deg] flex py-5 px-14 bg-gradient-to-r from-violet-400/70 to-fuchsia-500/70 text-white text-sm font-semibold rounded-md
				hover:shadow-lg hover:shadow-violet-400/70 focus:outline-none'
			>
				<p className='text-lg text-center'>Projects</p>
			</div>
		</Link>
	)
}
