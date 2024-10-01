export default function TanksInfo() {
	return (
		<footer className='w-full leading-6 z-[10] -bottom-full relative flex justify-center'>
			<div
				className="select-none z-[-1] absolute md:hidden
					h-24 w-full left-0 bottom-0 bg-black 
				 blur-md content-[''] opacity-100
				"
			/>
			<div
				className="select-none z-[-1] absolute md:hidden
					h-24 w-2/5 bottom-0 top-10 bg-black 
				 blur-xl content-[''] opacity-100
				"
			/>
			<div className='mt-12 pt-10 pb-12 md:pb-28 justify-between '>
				<div className='mb-6 sm:mb-0'>
					<p className='text-slate-500 text-center text-md'>
						Copyright © 2024 NobidoN.
					</p>
				</div>
			</div>
		</footer>
	)
}
