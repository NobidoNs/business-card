export default function TanksInfo() {
	return (
		<footer className='text-sm leading-6 z-[10] absolute -bottom-full md:block md:mt-12'>
			<div
				className="select-none z-[-1] absolute md:hidden
					h-24 w-[204%] -left-[52%] bottom-0 inset-x-0 bg-black 
				 blur-md content-[''] opacity-100
				"
			/>
			<div
				className="select-none z-[-1] absolute md:hidden
					h-24 w-[204%] -left-[52%] bottom-0 top-10 inset-x-0 bg-black 
				 blur-xl content-[''] opacity-100
				"
			/>
			<div className='mt-12 pt-10 pb-12 md:pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5'>
				<div className='mb-6 sm:mb-0 sm:flex'>
					<p>Copyright © 2024 NobidoN.</p>
				</div>
			</div>
		</footer>
	)
}
