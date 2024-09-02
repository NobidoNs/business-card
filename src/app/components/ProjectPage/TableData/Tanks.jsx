'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function TanksInfo({ vis }) {
	// const [visible, setVisible] = useState(Data.tanks)

	return (
		<>
			{vis && (
				<div
					className='hidden md:block absolute z-[-1] md:h-96 right-2 left-2 border-2 md:rounded-tl-none rounded-lg bg-blue opacity-15 z-10 select-none view-animate-[--subjectReveal] animate-slide-in-top'
					style={{
						backgroundImage:
							'linear-gradient(0deg, #025fa7,#1682d4,#00b0d0,#09d3f6,#42e3ff)',
					}}
				/>
			)}
			{vis && (
				<>
					<div className='hidden md:grid md:grid-cols-3 md:grid-rows-3 md:h-full px-4 gap-5 md:opacity-100 z-40'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 '>
								Это - монгопользовательская игра.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4'>
								Суть игры - уклоняться от снарядов, накапливать энергию,
								улучшать танк.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 z-40'>
								Победите соперников в честной борьбе.
							</p>
						</div>
						<div className='relative row-span-2 opacity-100 rounded-3xl z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-sky-400'
								src='/Tanks/Tanks.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Tanks/TanksTree.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Tanks/TanksGun.png'
								alt=''
								fill={true}
							/>
						</div>
					</div>

					<div className='grid grid-rows-9 px-4 grid-cols-1 h-full pb-5 opacity-100 z-40 md:hidden border border-stone-500 rounded-lg'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-4 '>
								Это - монгопользовательская игра.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-sky-400'
								src='/Tanks/Tanks.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-4'>
								Суть игры - уклоняться от снарядов, накапливать энергию,
								улучшать танк.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-fuchsia-600'
								src='/Tanks/TanksTree.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-6 z-40'>
								Победите соперников в честной борьбе.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-emerald-400'
								src='/Tanks/TanksGun.png'
								alt=''
								fill={true}
							/>
						</div>
					</div>
				</>
			)}
		</>
	)
}
