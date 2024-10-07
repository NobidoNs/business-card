export default function Decorations() {
	return (
		<>
			<div
				className="select-none z-[-2] md:absolute
						h-1/2 w-1/3 bg-gradient-conic rounded-full
					blur-2xl content-[''] from-DV9 to-DV7 opacity-25	
					-left-40 -bottom-32"
			/>
			<div
				className="select-none z-[-2] md:absolute
					h-full w-full bg-gradient-to-t 
				blur-2xl content-[''] from-violet-500 to-LB opacity-50
				right-0 -bottom-full md:opacity-30"
			/>
			<div
				className="select-none z-[-2] absolute
						sm:h-[500px] md:h-full h-96 w-96 md:w-1/3 rounded-full -bottom-10 sm:bottom-24 md:-bottom-80 blur-2xl
					content-[''] md:bg-gradient-to-r bg-gradient-to-l from-fuchsia-900 md:opacity-45	
					2xl:-right-48 right-0 opacity-30"
			/>
			<div
				className="select-none z-[-2] absolute
					 md:h-full h-96 w-full md:w-1/3 rounded-full bottom-48 md:-bottom-80 blur-2xl
					content-[''] md:bg-gradient-to-r bg-gradient-to-l from-fuchsia-900 md:opacity-45	
					2xl:-right-48 right-0 opacity-50 md:hidden"
			/>
		</>
	)
}
