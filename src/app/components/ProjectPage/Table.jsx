'use client'

import React from 'react'
import Image from 'next/image'
import { Button3D } from '../../../../test'

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
					<Button3D />
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
