export default function MapBG() {
	return (
		<div className='absolute top-2 h-full w-full left-0'>
			<div className='pb-1.5 h-full'>
				<div
					className='border-x-2 border-t h-full rounded-t-md bg-black opacity-0 z-20'
					style={{
						backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
					}}
					id='MapDiv'
				>
					{' '}
				</div>
			</div>
		</div>
	)
}
