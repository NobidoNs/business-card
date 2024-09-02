export default function SpreadBG({ vis }) {
	return (
		<>
			{vis && (
				<div className='md:absolute top-2 h-full w-full left-0 hidden md:block'>
					<div className='pr-2 pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md bg-black opacity-15 z-20'
							style={{
								backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
							}}
							id='SpreadDiv'
						>
							{' '}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
