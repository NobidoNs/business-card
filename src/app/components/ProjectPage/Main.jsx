import TableProjects from '../../components/ProjectPage/Table'

export default function ProjectPage() {
	return (
		<div
			className='md:flex md:h-svh w-full md:flex-col items-center justify-between bg-local pt-10 md:pt-0'
			id='projects'
		>
			<div className='md:flex md:max-h-80 w-full md:flex-col items-center justify-between bg-local'>
				<TableProjects />
			</div>
		</div>
	)
}
