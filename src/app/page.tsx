import Image from 'next/image'
import ProjectLink from './components/HomePage/ProjectLink'
import { GmailColumn } from './components/HomePage/TableOfLinks/GmailColumn'
import { GitColumn } from './components/HomePage/TableOfLinks/GitColumn'
import { DiscordColumn } from './components/HomePage/TableOfLinks/DiscordColumn'

export default function Home() {
	return (
		<main className='flex min-h-9 flex-col items-center justify-between sm:pt-40 pt-10 sm:pb-40 bg-local '>
			<div
				className="select-none relative z-[-1] flex place-items-center before:absolute before:h-[300px]
			before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white
			before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px]
				after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200
			after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 
			before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] 
			sm:after:w-[240px] before:lg:h-[360px]"
			>
				<Image
					className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
					src='/Main/header.png'
					alt='Next.js Logo'
					width={300}
					height={40}
					priority
				/>
			</div>

			<div className='sm:mb-32 grid text-center sm:grid-cols-3 grid-cols-1 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left shadow-2xl py-8 sm:py-20 space-x-5'>
				<GitColumn />

				<GmailColumn />

				<DiscordColumn />
			</div>

			<div>
				<ProjectLink />
			</div>
		</main>
	)
}
