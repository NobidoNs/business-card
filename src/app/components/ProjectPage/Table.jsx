'use client'

import React from 'react'
import Image from 'next/image'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'

export default function TableProjects() {
	return (
		<table className='size-full'>
			<tbody>
				<tr>
					<td className='py-5'>
						<div className='flex justify-center items-center'>
							<TanksImage />
						</div>
					</td>
					<td className='py-5'>
						<div className='flex justify-center items-center'>
							<TanksImage />
						</div>
					</td>
				</tr>
				<tr>
					<td className='py-5'>
						<div className='flex justify-center items-center'>
							<TanksImage />
						</div>
					</td>
					<td className=' py-5'>
						<div className='flex justify-center items-center'>
							<TanksImage />
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
