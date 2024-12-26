import ContactPage from './components/HomePage/Main'
import ProjectPage from './components/ProjectPage/Main'
import Decorations from './components/Decorations'
import Footer from './components/footer'

export default function Home() {
	return (
		<main className='w-full flex flex-col items-center bg-local'>
			<ContactPage />
			<ProjectPage />
			<Decorations />
			<Footer />
		</main>
	)
}
