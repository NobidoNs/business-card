import ContactPage from './components/HomePage/Main'
import ProjectPage from './components/ProjectPage/Main'
import Decorations from './components/Decorations'
import Footer from './components/footer'

export default function Home() {
	return (
		<main className='flex w-full min-h-9 flex-col items-center justify-between bg-local '>
			<ContactPage />
			<ProjectPage />
			<Decorations />
			<Footer />
		</main>
	)
}
