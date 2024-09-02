'use client'

import Image from 'next/image'

export function DiscordColumn() {
	return (
		<div className='columns-1 select-none'>
			<div
				className='flex justify-center md:max-lg:flex px-5 py-4 select-none group transition-colors
				rounded-full border border-transparent bg-gradient-to-tr from-blue-600/70 to-fuchsia-400/70
				hover:shadow-lg hover:shadow-cyan-500/50 hover:border-neutral-700 hover:bg-neutral-800/30 
				bg-neutral-800/30 border-neutral-700 md:bg-transparent md:border-transparent md:from-transparent'
			>
				<a
					href='https://discordapp.com/users/608896883271663645'
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className='md:mb-3 text-2xl text-center font-semibold'>
						Discord{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
				</a>
			</div>
			<div className='flex justify-center md:max-lg:flex pt-2'>
				<a
					href='https://discordapp.com/users/608896883271663645'
					target='_blank'
				>
					<Image
						className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa]'
						src='/Main/Discord3D.png'
						// src=''
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
