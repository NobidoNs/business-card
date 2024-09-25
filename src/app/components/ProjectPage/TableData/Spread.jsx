import Image from 'next/image'
// <div
// 	className='relative -top-[0px] border-2 rounded-tr-none rounded-lg pl-2 h-full bg-blue opacity-0 z-10 text-black select-none'
// 	style={{
// 		backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
// 	}}
// 	id='SpreadInfo'
// >
//  Поле делится на квадраты 3х3, при
// заполнении такого квадрата, он вновь становится пустым, но захватывает
// соседние. Цель игры захвотить все поля соперника.
// </div>
export default function SpreadInfo({ vis }) {
	return (
		<>
			{vis && (
				<div
					className='hidden md:block absolute z-[-1] right-2 left-2 h-full border-2 rounded-tr-none rounded-lg pl-2 bg-blue opacity-25 select-none view-animate-[--subjectReveal] animate-slide-in-top'
					style={{
						backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
					}}
				/>
			)}
			{vis && (
				<>
					<div className='hidden md:grid grid-rows-2 grid-cols-3 lg:grid-rows-3 h-full px-4 gap-2 lg:gap-5 z-40'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 '>
								Spread - игра на клеточном поле.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 text-sm lg:text-base'>
								Поле делится на квадраты 3х3, при заполнении такого квадрата, он
								вновь становится пустым, но захватывает соседние.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 z-40'>
								Цель игры захвотить все поля соперника.
							</p>
						</div>
						<div className='relative row-span-2  rounded-3xl z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Spread/emp.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Spread/2.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Spread/3.png'
								alt=''
								fill={true}
							/>
						</div>
					</div>

					<div className='grid grid-rows-9 px-4 grid-cols-1 h-full pb-5  z-40 md:hidden border border-stone-500 rounded-lg'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-4 '>
								Spread - игра на клеточном поле.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Spread/empP.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-4 pb-2'>
								Поле делится на квадраты 3х3, при заполнении такого квадрата, он
								вновь становится пустым, но захватывает соседние.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20  border-2 border-fuchsia-600'
								src='/Spread/2P.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-6 z-40'>
								Цель игры захвотить все поля соперника.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20  border-2 border-emerald-400'
								src='/Spread/3P.png'
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
