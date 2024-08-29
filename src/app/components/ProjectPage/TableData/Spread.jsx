import Image from 'next/image'
// <div
// 	className='relative -top-[0px] border-2 rounded-tr-none rounded-lg pl-2 h-full bg-blue opacity-0 z-10 text-black select-none'
// 	style={{
// 		backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
// 	}}
// 	id='SpreadInfo'
// >
// 	Spread - игра на клеточном поле. Поле делится на квадраты 3х3, при
// 	заполнении такого квадрата, он вновь становится пустым, но захватывает
// 	соседние. Цель игры захвотить все поля соперника.
// </div>
export default function SpreadInfo({ vis }) {
	return (
		<>
			{vis && (
				<div
					className='absolute h-full md:h-96 w-full border-2 rounded-tl-none rounded-lg pl-2 bg-blue opacity-15 z-10 select-none view-animate-[--subjectReveal] animate-slide-in-top'
					style={{
						backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
					}}
				/>
			)}
			{vis && (
				<>
					<div className='grid grid-cols-3 grid-rows-3 h-full pb-5 opacity-100 z-40 hidden md:block'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-black text-center pr-6 pt-4 '>
								Это - монгопользовательская игра.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-black text-center pr-6 pt-4'>
								Суть игры - уклоняться от снарядов, накапливать энергию,
								улучшать танк.
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
					<div className='grid grid-rows-9 grid-cols-1 h-full pb-5 opacity-100 z-40 md:hidden'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-black text-center pr-6 pt-4 '>
								Это - монгопользовательская игра.
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
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-black text-center pr-6 pt-4'>
								Суть игры - уклоняться от снарядов, накапливать энергию,
								улучшать танк.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa] rounded-3xl z-20 border-2 border-zinc-500 px-5'
								src='/Tanks/TanksGun.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-black text-center pr-6 pt-4 z-40'>
								Победите соперников в честной борьбе.
							</p>
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
				</>
			)}
		</>
	)
}
