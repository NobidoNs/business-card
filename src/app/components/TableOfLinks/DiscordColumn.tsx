'use client'

import Image from 'next/image'

export function DiscordColumn() {
	return (
		<div className='columns-1 select-none'>
			<div className='group rounded-full border border-transparent px-5 py-4 transition-colors hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
				<a
					href='https://discordapp.com/users/608896883271663645'
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className='mb-3 text-2xl text-center font-semibold'>
						Discord{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
				</a>
			</div>
			<div className='flex justify-center md:max-lg:flex pt-2'>
				<a href='https://discordapp.com/users/608896883271663645'>
					<Image
						className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa]'
						src='/Discord3D.png'
						alt='Next.js Logo'
						width={128}
						height={128}
						priority
					/>
				</a>
			</div>
		</div>
	)
}
