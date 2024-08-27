'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function TanksInfo({ vis }) {
	// const [visible, setVisible] = useState(Data.tanks)

	return (
		<>
			{vis && (
				<div
					className='absolute h-96 w-full border-2 rounded-tl-none rounded-lg pl-2 bg-blue opacity-15 z-10 select-none table view-animate-[--subjectReveal] animate-slide-in-top'
					style={{
						backgroundImage:
							'linear-gradient(0deg, #025fa7,#1682d4,#00b0d0,#09d3f6,#42e3ff)',
					}}
				/>
			)}
			{vis && (
				<div className='grid grid-cols-3 grid-rows-3 h-full pb-5 opacity-100 z-40 table '>
					<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
						<p className='text-black text-center pr-6 pt-4 '>
							Это - монгопользовательская игра.
						</p>
					</div>
					<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
						<p className='text-black text-center pr-6 pt-4'>
							Суть игры - уклоняться от снарядов, накапливать энергию, улучшать
							танк.
						</p>
					</div>
					<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
						<p className='text-black text-center pr-6 pt-4 z-40'>
							Победите соперников в честной борьбе.
						</p>
					</div>
					<div className='relative row-span-2 opacity-100 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
						<Image
							className='object-fill rounded-3xl z-20 px-5 opacity-100'
							src='/Tanks/TanksTree.png'
							alt=''
							fill={true}
						/>
					</div>
					<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
						<Image
							className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa] rounded-3xl z-20 border-2 border-zinc-500 px-5'
							src='/Tanks/TanksGun.png'
							alt=''
							fill={true}
						/>
					</div>
					<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
						<Image
							className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa] rounded-3xl z-20 border-2 border-zinc-500 px-5'
							src='/Tanks/Tanks.png'
							alt=''
							fill={true}
						/>
					</div>
				</div>
			)}
		</>
	)
}
