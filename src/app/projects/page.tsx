'use client'

import Image from 'next/image'
import { FaHome } from 'react-icons/fa'
import { IconContext } from 'react-icons'
export default function Page() {
	const LinkIcon = FaHome
	return (
		<main className='flex min-h-9 flex-col justify-between pt-2 pl-1 bg-local select-none'>
			<div className='rounded-2xl border-2 border-neutral-500 bg-gradient-to-r from-violet-400 to-violet-500 px-5 py-4 size-fit transition-colors hover:shadow-lg hover:shadow-violet-500/50 hover:dark:bg-neutral-800/30'>
				<a href='/'>
					<IconContext.Provider
						value={{
							color: 'blue',
							className: 'global-class-name m-auto',
							size: '2em',
						}}
					>
						<div>
							<FaHome />
						</div>
					</IconContext.Provider>
				</a>
			</div>
		</main>
	)
}
