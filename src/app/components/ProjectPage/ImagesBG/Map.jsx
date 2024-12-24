export default function MapBG({ vis }) {
	return (
		<>
			{vis && (
				<div className='absolute top-2 h-full w-full left-0 view-animate-[--subjectReveal] animate-slide-in-top hidden md:block'>
					<div className='pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md z-20 opacity-40 dark:hidden'
							style={{
								backgroundImage:
									'linear-gradient(180deg, #65d3ba,#2cfab8,#3eef74)',
							}}
							id='TanksDiv'
						>
							{' '}
						</div>
						<div
							className='border-x-2 border-t h-full rounded-t-md z-20 opacity-15 bg-black hidden dark:block'
							style={{
								backgroundImage:
									'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
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
