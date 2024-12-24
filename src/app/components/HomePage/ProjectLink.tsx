'use client'

import Link from 'next/link'
import clsx from 'clsx'

export default function ProjectLink() {
	return (
		<Link key='Projects' href='#projects' className={clsx()}>
			<div
				className='select-none rotate-x-[deg] rotate-y-[6deg] flex py-5 px-14 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-white text-sm font-semibold rounded-md
				hover:shadow-lg hover:shadow-violet-400 focus:outline-none dark:from-violet-400/70 dark:to-fuchsia-500/70 dark:hover:shadow-violet-400/70'
			>
				<p className='text-lg text-center'>Projects</p>
			</div>
		</Link>
	)
}
