import ContactPage from './components/HomePage/Main'
import ProjectPage from './components/ProjectPage/Main'

export default function Home() {
	return (
		<main className='flex w-full min-h-9 flex-col items-center justify-between bg-local"'>
			<ContactPage />
			<ProjectPage />
			<div>{/* <img src='/SPACE.gif' alt='GIF Image' /> */}</div>
			<div
				className="select-none z-[-1] absolute
						h-1/2 w-1/3 bg-gradient-conic rounded-full
					blur-2xl content-[''] from-DV9 to-DV7 opacity-20
					-left-40 -bottom-40"
			>
				o
			</div>
		</main>
	)
}
