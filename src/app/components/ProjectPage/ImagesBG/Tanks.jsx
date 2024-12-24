export default function TanksBG({ vis }) {
	return (
		<>
			{vis && (
				<div className='hidden md:block absolute top-2 h-full w-full left-0 view-animate-[--subjectReveal] animate-slide-in-top'>
					<div className='pl-2 pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md z-20 opacity-40 dark:hidden'
							style={{
								backgroundImage:
									'linear-gradient(180deg, #025fa7,#1682d4,#00b0d0,#09d3f6,#42e3ff)',
							}}
							id='TanksDiv'
						>
							{' '}
						</div>
						<div
							className='border-x-2 border-t h-full rounded-t-md z-20 opacity-15 bg-black hidden dark:block'
							style={{
								backgroundImage:
									'linear-gradient(0deg, #025fa7,#1682d4,#00b0d0,#09d3f6,#42e3ff)',
							}}
							id='TanksDiv'
						>
							{' '}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
