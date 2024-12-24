'use client'

export function DiscordColumn() {
	return (
		<div className='columns-1 select-none'>
			<a
				href='https://discordapp.com/users/608896883271663645'
				target='_blank'
				rel='noopener noreferrer'
			>
				<div
					className='flex justify-center md:max-lg:flex px-5 py-4 select-none group transition-colors
				rounded-full border border-transparent bg-gradient-to-tr from-blue-600/70 to-fuchsia-400/70 text-gray-700
				hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:border-neutral-700 hover:bg-neutral-800/30 
				bg-neutral-800/30 border-neutral-700 md:bg-transparent md:border-transparent md:from-transparent
				hover:text-black dark:text-white hover:dark:text-white'
				>
					<h2 className='md:mb-3 text-2xl text-center font-semibold'>
						Discord{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
				</div>
			</a>
			<div className='flex justify-center md:max-lg:flex pt-2'>
				<a
					href='https://discordapp.com/users/608896883271663645'
					target='_blank'
				>
					<img
						className='object-fill hover:drop-shadow-[0_0_0.5rem_#0B72ff] dark:hover:drop-shadow-[0_0_0.5rem_#60a5fa]'
						src='/Main/Discord3D.png'
						width={128}
						height={128}
						loading='eager'
					/>
				</a>
			</div>
		</div>
	)
}
