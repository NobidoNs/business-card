'use client'

import Link from 'next/link'

export default function TanksInfo({ vis }) {
	return (
		<>
			{vis && (
				<div
					className='hidden md:block absolute z-[-1] h-full right-2 left-2 border-2 rounded-tl-none rounded-lg bg-blue select-none 
					view-animate-[--subjectReveal] animate-slide-in-top opacity-40 dark:opacity-15'
					style={{
						backgroundImage:
							'linear-gradient(0deg, #025fa7,#1682d4,#00b0d0,#09d3f6,#42e3ff)',
					}}
				/>
			)}
			{vis && (
				<>
					<div className='flex justify-center items-center x-4'>
						<Link href='https://tanks-1n99.onrender.com/' className='w-full max-w-md md:w-auto md:max-w-none'>
							<div
								className='select-none rotate-x-[deg] rotate-y-[6deg] flex justify-center items-center py-3 px-4 sm:py-5 sm:px-14 bg-gradient-to-r from-gray-900 to-blue-700 text-white text-sm sm:text-lg text-center font-semibold rounded-md
								hover:shadow-lg hover:shadow-blue-500 focus:outline-none dark:from-black dark:to-blue-500 dark:hover:shadow-blue-400/70 w-full'
							>
								<p className='px-2 sm:px-8 md:px-16 md:px-32 break-all'>tanks-1n99.onrender.com</p>
							</div>
						</Link>
					</div>
					<div className='hidden md:grid grid-rows-2 grid-cols-3 lg:grid-rows-3 h-full px-4 gap-2 lg:gap-5 z-40'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 font-bold dark:font-normal'>
								Это - монгопользовательская игра.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 font-bold dark:font-normal'>
								Суть игры - уклоняться от снарядов, накапливать энергию,
								улучшать танк.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 z-40 font-bold dark:font-normal'>
								Победите соперников в честной борьбе.
							</p>
						</div>
						<div className='relative row-span-2  rounded-3xl z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Tanks/Tanks.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Tanks/TanksTree.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Tanks/TanksGun.png'
								alt=''
								fill={'true'}
							/>
						</div>
					</div>

					<div className='px-4 h-full pb-5 z-40 md:hidden rounded-lg'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Это - монгопользовательская игра.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-sky-400'
								src='/Tanks/Tanks.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Суть игры - уклоняться от снарядов, накапливать энергию,
								улучшать танк.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Tanks/TanksTree.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Победите соперников в честной борьбе.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Tanks/TanksGun.png'
								alt=''
								fill={'true'}
							/>
						</div>
					</div>
				</>
			)}
		</>
	)
}
