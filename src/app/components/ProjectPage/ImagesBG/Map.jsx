export default function MapBG({ vis }) {
	return (
		<>
			{vis && (
				<div className='md:absolute top-2 h-full w-full left-0 view-animate-[--subjectReveal] animate-slide-in-top hidden md:block'>
					<div className='pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md bg-black opacity-15 z-20'
							style={{
								backgroundImage:
									'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
							}}
							id='MapDiv'
						>
							{' '}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
