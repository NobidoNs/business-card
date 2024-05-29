import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex min-h-9 flex-col items-center justify-between pt-40 pb-40 bg-local'>
			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<Image
					className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left shadow-2xl py-20 space-x-5'>
				<div className='columns-1'>
					<div className='group rounded-full border border-transparent px-5 py-4 transition-colors hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
						<a
							href='https://github.com/NobidoNs'
							target='_blank'
							rel='noopener noreferrer'
						>
							<h2 className='mb-3 text-2xl text-center font-semibold'>
								GitHub{' '}
								<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
									-&gt;
								</span>
							</h2>
						</a>
					</div>
				</div>

				<div className='columns-1'>
					<div className='group rounded-full border border-transparent px-5 py-4 transition-colors hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
						<a
							href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'
						>
							<h2 className='mb-3 text-2xl text-center font-semibold'>
								Gmail{' '}
								<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
									-&gt;
								</span>
							</h2>
						</a>
					</div>
				</div>

				<div className='columns-1'>
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
					<div className='flex justify-center md:max-lg:flex'>
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
			</div>

			<div className=''>
				<p className='mb-3 text-2xl text-center font-semibold'>Projects</p>
			</div>
			{/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div> */}
		</main>
	)
}
