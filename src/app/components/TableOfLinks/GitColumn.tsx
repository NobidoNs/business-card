'use client'

import Image from 'next/image'

export function GitColumn() {
	return (
		<div className='columns-1 select-none'>
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
			<div className='flex justify-center md:max-lg:flex pt-2'>
				<a href='https://github.com/NobidoNs'>
					<Image
						className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa]'
						src='/github-2.png'
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

export function GmailColumn() {
	return (
		<div className='flex justify-center md:max-lg:flex pt-2 select-none group rounded-full border border-transparent px-5 py-4 transition-colors hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
			<a target='_blank' rel='noopener noreferrer'>
				<h2 className='mb-3 text-2xl text-center font-semibold'>
					Gmail{' '}
					<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
						-&gt;
					</span>
				</h2>
			</a>
		</div>
	)
}
