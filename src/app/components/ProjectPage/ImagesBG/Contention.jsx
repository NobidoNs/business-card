export default function ContentionBG({ vis }) {
	return (
		<>
			{vis && (
				<div className='absolute top-2 h-full w-full left-0 hidden md:block view-animate-[--subjectReveal] animate-slide-in-top'>
					<div className='pr-2 pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md z-20 opacity-40 dark:hidden'
							style={{
								backgroundImage: 'linear-gradient(180deg, #e97084,#d2b1a1)',
							}}
							id='TanksDiv'
						>
							{' '}
						</div>
						<div
							className='border-x-2 border-t h-full rounded-t-md z-20 opacity-15 bg-black hidden dark:block'
							style={{
								backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
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
