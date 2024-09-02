export default function TanksBG({ vis }) {
	return (
		<>
			{vis && (
				<div className='md:absolute top-2 h-full w-full left-0 view-animate-[--subjectReveal] animate-slide-in-top hidden md:block'>
					<div className='pl-2 pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-md bg-black opacity-15 z-20'
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
