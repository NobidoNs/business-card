import Image from 'next/image'

export default function MapInfo({ vis }) {
	return (
		<>
			{vis && (
				<div
					className='hidden md:block absolute z-[-1] md:h-96 right-2 left-2 border-2 rounded-lg pl-2 bg-blue opacity-25 z-10 select-none view-animate-[--subjectReveal] animate-slide-in-top'
					style={{
						backgroundImage: 'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
					}}
				/>
			)}
			{vis && (
				<>
					<div className='hidden md:grid md:grid-cols-3 md:grid-rows-3 md:h-full px-4 gap-5 md:opacity-100 z-40'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 '>
								Проект на базе яндекс карт.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4'>
								Он определяет местоположение пользователя, позволяет выделять
								территорию и прокладывать маршрут в случайное место.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 z-40'>
								Задумывалось использовать, чтобы прогулки стали инререснее.
							</p>
						</div>
						<div className='relative row-span-2 opacity-100 rounded-3xl z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-sky-400'
								src='/Map/1.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Map/2.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Map/3.png'
								alt=''
								fill={true}
							/>
						</div>
					</div>

					<div className='grid grid-rows-9 px-4 grid-cols-1 h-full pb-5 opacity-100 z-40 md:hidden border border-stone-500 rounded-lg'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-4 '>
								Проект на базе яндекс карт.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-sky-400'
								src='/Map/1.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-4'>
								Он определяет местоположение пользователя, позволяет выделять
								территорию и прокладывать маршрут в случайное место.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-fuchsia-600'
								src='/Map/2.png'
								alt=''
								fill={true}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-6 z-40'>
								Задумывалось использовать, чтобы прогулки стали инререснее.
							</p>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<Image
								className='object-fill rounded-3xl z-20 opacity-100 border-2 border-emerald-400'
								src='/Map/3.png'
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
