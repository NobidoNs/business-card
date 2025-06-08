import Link from 'next/link'
export default function ContentionInfo({ vis }) {
	return (
		<>
			{vis && (
				<div
					className='hidden md:block absolute z-[-1] right-2 left-2 h-full border-2 rounded-lg pl-2 bg-blue select-none 
					view-animate-[--subjectReveal] animate-slide-in-top opacity-50 dark:opacity-25'
					style={{
						backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
					}}
				/>
			)}
			{vis && (
				<>
          <div className='flex justify-center items-center x-4'>
            <Link href='https://contention-nobidon.vercel.app/' className='w-full max-w-md md:w-auto md:max-w-none'>
              <div
                className='select-none rotate-x-[deg] rotate-y-[6deg] flex justify-center items-center py-3 px-4 sm:py-5 sm:px-14 bg-gradient-to-r from-violet-400 to-fuchsia-500 text-white text-sm sm:text-lg text-center font-semibold rounded-md
                hover:shadow-lg hover:shadow-violet-400 focus:outline-none dark:from-sky-300 dark:to-fuchsia-500 dark:hover:shadow-sky-300/70 w-full'
              >
                <p className='px-2 sm:px-8 md:px-16 md:px-32 break-all'>contention-nobidon.vercel.app</p>
              </div>
            </Link>
          </div>
					<div className='hidden md:grid grid-rows-2 grid-cols-3 lg:grid-rows-3 h-full px-4 gap-2 lg:gap-5 z-40'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 font-bold dark:font-normal'>
              Contention - проект для подготовки к ЕГЭ.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 text-sm lg:text-base font-bold dark:font-normal'>
								Это онлайн таблица, куда нужно занасить данные о прогрессе подготовки. Соревновательный дух повышает эффективность.
							</p>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pr-6 pt-4 z-40 font-bold dark:font-normal'>
								Реализована авторизация через Google, система профилей и взаимодействие с базой данных.
							</p>
						</div>
						<div className='relative row-span-2  rounded-3xl z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Contention/profile.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-fuchsia-600'
								src='/Contention/profile_history.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='relative row-span-2 z-40 view-animate-[--subjectReveal] animate-blurred-fade-in'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20 border-2 border-emerald-400'
								src='/Contention/history.png'
								alt=''
								fill={'true'}
							/>
						</div>
					</div>

					<div className='px-4 h-full pb-5 z-40 md:hidden rounded-lg'>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Contention - проект для подготовки к ЕГЭ.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-sky-400'
								src='/Contention/profile.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Поле делится на квадраты 3х3, при заполнении такого квадрата, он
								вновь становится пустым, но захватывает соседние.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-fuchsia-600'
								src='/Contention/profile_history.png'
								alt=''
								fill={'true'}
							/>
						</div>
						<div className='z-40 view-animate-[--subjectReveal] animate-slide-in-top'>
							<p className='text-wight text-center pt-5 pb-2 font-bold dark:font-normal'>
								Цель игры захвотить все поля соперника.
							</p>
						</div>
						<div className='relative z-40 view-animate-[--subjectReveal] animate-blurred-fade-in pb-4'>
							<img
								loading='eager'
								className='object-fill rounded-3xl z-20  border-2 border-emerald-400'
								src='/Contention/history.png'
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
