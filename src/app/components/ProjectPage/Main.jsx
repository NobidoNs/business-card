import TableProjects from '../../components/ProjectPage/Table'
import Decorate from '../ProjectPage/decorate'

export default function ProjectPage() {
	return (
		<div
			className='flex flex-col md:h-auto w-full items-center bg-local pt-10 md:pt-5 pb-32'
			id='projects'
		>
			<div className='md:flex w-full md:flex-col items-center justify-between bg-local relative'>
				<TableProjects />
				<Decorate />
			</div>
		</div>
	)
}
