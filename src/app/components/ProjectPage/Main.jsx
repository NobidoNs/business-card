import TableProjects from '../../components/ProjectPage/Table'
import TanksInfo from '../../components/ProjectPage/TanksInfo'

export default function ProjectPage() {
	return (
		<div
			className='flex h-svh w-full flex-col items-center justify-between bg-local"'
			id='projects'
		>
			<div className='flex max-h-80 w-full flex-col items-center justify-between bg-local'>
				<TableProjects />
				{/* <TanksInfo /> */}
			</div>
		</div>
	)
}
