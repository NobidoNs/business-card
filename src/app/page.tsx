import Image from 'next/image'
import ProjectLink from './components/HomePage/ProjectLink'
import { GmailColumn } from './components/HomePage/TableOfLinks/GmailColumn'
import { GitColumn } from './components/HomePage/TableOfLinks/GitColumn'
import { DiscordColumn } from './components/HomePage/TableOfLinks/DiscordColumn'

export default function Home() {
	return (
		<main className='flex w-full min-h-9 flex-col items-center justify-between md:py-40 pt-10 bg-local '>
			<div
				className="select-none relative z-[-1] flex place-items-center before:absolute before:h-[300px]
				before:w-full before:-translate-x-1/4 before:rounded-full before:bg-gradient-to-br before:from-transparent
				before:to-blue-700  before:blur-2xl before:content-[''] before:opacity-25
					after:absolute after:-z-20 after:h-[180px] after:w-full after:-translate-x-1/4 after:bg-gradient-conic
				after:blur-2xl after:content-[''] after:from-sky-900 after:via-[#0141ff] after:opacity-40
				  md:after:translate-x-1/3 md:before:-translate-x-1/2 "
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

			<div className='space-y-24 pb-24 grid text-center grid-cols-1 md:grid-cols-3 md:space-y-0 md:mb-0 lg:w-full lg:max-w-5xl lg:text-left shadow-2xl py-16 md:py-20 '>
				<div>
					<GitColumn />
				</div>

				<div>
					<GmailColumn />
				</div>

				<div>
					<DiscordColumn />
				</div>
			</div>

			<div className='pb-12'>
				<ProjectLink />
			</div>
		</main>
	)
}
