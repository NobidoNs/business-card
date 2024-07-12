'use client'

import React from 'react'
import Image from 'next/image'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'

export default function TableProjects() {
	return (
		<table className='size-full table-fixed'>
			<tbody>
				<tr>
					<td className='select-none p-5 pt-8 max-h-80 shadow-lg shadow-cyan-500/50 rounded-l pb-48'>
						<div className='justify-center items-center'>
							<TanksImage />
							<div className='pt-4 select-auto'>
								<p className=' flex w-full justify-center '>
									Это - монгопользовательская игра. Суть игры - уклоняться от
									снарядов, накапливать энергию, улучшить танк и победить
									соперников в честной борьбе.
								</p>
							</div>
						</div>
					</td>
					<td className='select-none p-5 pt-8 rounded-l'>
						<div className='justify-top items-top'>
							<TanksImage />
						</div>
					</td>
					<td className='select-none p-5 pt-8 shadow-lg shadow-cyan-500/50 rounded-l'>
						<div className='justify-center items-center '>
							<TanksImage />
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
