import ContactPage from './components/HomePage/Main'
import ProjectPage from './components/ProjectPage/Main'

export default function Home() {
	return (
		<main className='flex w-full min-h-9 flex-col items-center justify-between bg-local"'>
			<ContactPage />
			<ProjectPage />
			<div>{/* <img src='/SPACE.gif' alt='GIF Image' /> */}</div>
			<div
				className="select-none z-[-1] static
							after:absolute after:h-[80px] after:w-full after:-translate-x-1/4 after:bg-gradient-conic
						after:blur-2xl after:content-[''] after:from-sky-900 after:via-[#0141ff] after:opacity-100
							 left-0 bottom-0"
			>
				o
			</div>
		</main>
	)
}
