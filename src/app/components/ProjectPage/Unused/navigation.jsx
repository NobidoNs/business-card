'use client'

import { FaHome } from 'react-icons/fa'

export default function Navigation() {
	const LinkIcon = FaHome
	return (
		<main className='min-h-9 flex-col justify-between bg-local select-none'>
			<nav className='text-justify  mx-20'>
				<div className='grid grid-flow-col grid-rows-1 text-justify  p-5'>
					<h1 className='logo size-min pl-6'>
						<a href='/' className='mx-auto '>
							<div style={{ color: 'rgb(0, 255, 255)' }}>
								<LinkIcon size='2em' />
							</div>
						</a>
					</h1>
					<ul className='size-min'>
						<div>
							<p className='text-lg text-center pr-14'>Projects</p>
						</div>
					</ul>
				</div>
			</nav>
		</main>
	)
}
