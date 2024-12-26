export default function MapInfo({ vis }) {
	return (
		<>
			{vis && (
				<div
					className='hidden md:block absolute z-[-1] h-full right-2 left-2 border-2 rounded-lg pl-2 bg-blue select-none 
					view-animate-[--subjectReveal] animate-slide-in-top opacity-50 dark:opacity-25'
					style={{
						backgroundImage: 'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
					}}
				/>
			)}
			{vis && (
				<>
					<div className='hidden md:grid grid-rows-2 grid-cols-3 lg:grid-rows-3 h-full px-4 gap-2 lg:gap-5 z-40'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center lg:pr-6 lg:pt-4 pt-2 font-bold dark:font-normal'>
								Проект на базе яндекс карт.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center lg:pr-6 lg:pt-4 pt-2 text-sm lg:text-base font-bold dark:font-normal'>
								Он определяет местоположение пользователя, позволяет выделять
								территорию и прокладывать маршрут в случайное место.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center lg:pr-6 lg:pt-4 pt-2 font-bold dark:font-normal'>
								Задумывалось использовать, чтобы прогулки стали инререснее.
							</p>
						</div>
						<div className='relative row-span-2  rounded-3xl z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Map/1.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Map/2.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Map/3.png'
								alt=''
								fill={'true'}
							/>
						</div>
					</div>

					<div className='grid px-4 h-full pb-5 z-40 md:hidden rounded-lg'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Проект на базе яндекс карт.
							</p>
						</div>
						<div className='relative -2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Map/1.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Он определяет местоположение пользователя, позволяет выделять
								территорию и прокладывать маршрут в случайное место.
							</p>
						</div>
						<div className='relative -2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-fuchsia-600'
								src='/Map/2.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Задумывалось использовать, чтобы прогулки стали инререснее.
							</p>
						</div>
						<div className='relative -2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-emerald-400'
								src='/Map/3.png'
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
