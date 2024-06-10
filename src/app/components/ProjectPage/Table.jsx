import React from 'react'
import Image from 'next/image'

export default function TableProjects() {
	return (
		<table className='text-center size-full'>
			<tr>
				<th>
					<div className='xl'>
						{' '}
						<Image
							className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
							src='/Tanks/Tanks.png'
							alt='Next.js Logo'
							width={600}
							height={80}
							priority
						/>
					</div>
				</th>
				<th>
					<Image
						className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
						src='/header.png'
						alt='Next.js Logo'
						width={300}
						height={40}
						priority
					/>
				</th>
			</tr>
			<tr>
				<td>
					<Image
						className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
						src='/header.png'
						alt='Next.js Logo'
						width={300}
						height={40}
						priority
					/>
				</td>
				<td>
					<Image
						className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
						src='/header.png'
						alt='Next.js Logo'
						width={300}
						height={40}
						priority
					/>
				</td>
			</tr>
		</table>
	)
}
