export default function Decorations() {
	return (
		<>
			{/* <div><img src='/SPACE.gif' alt='GIF Image' /></div> */}
			<div
				className="select-none z-[-1] absolute
						h-1/2 w-1/3 bg-gradient-conic rounded-full
					blur-2xl content-[''] from-DV9 to-DV7 opacity-25	
					-left-40 -bottom-32"
			/>
			<div
				className="select-none z-[-1] absolute
					h-full w-full bg-gradient-to-t
				blur-2xl content-[''] from-violet-500 to-LB opacity-30
				right-0 -bottom-full"
			/>
			<div
				className="select-none z-[-1] absolute
						h-full w-1/3 rounded-full -bottom-80 blur-2xl
					content-[''] bg-gradient-to-r from-fuchsia-900 opacity-45	
					-right-48 "
			></div>
		</>
	)
}
