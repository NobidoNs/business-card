import Image from 'next/image'
import ProjectLink from '../../components/HomePage/ProjectLink'
import { GmailColumn } from '../../components/HomePage/TableOfLinks/GmailColumn'
import { GitColumn } from '../../components/HomePage/TableOfLinks/GitColumn'
import { DiscordColumn } from '../../components/HomePage/TableOfLinks/DiscordColumn'

export default function ContactPage() {
	return (
		<div className='flex md:h-svh w-full flex-col items-center justify-between bg-local"'>
			<div className='flex h-full md:h-auto md:pt-40 w-full flex-col items-center justify-between bg-local pt-5'>
				<div
					className="select-none relative z-[1] flex place-items-center before:absolute before:h-[300px]
						before:w-full before:-translate-x-1/4 before:rounded-full before:bg-gradient-to-br before:from-transparent
						before:to-blue-700  before:blur-2xl before:content-[''] before:opacity-30
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

				<div className='z-10 relative space-y-24 pb-24 grid text-center grid-cols-1 md:grid-cols-3 md:space-y-0 md:mb-0 lg:w-full lg:max-w-5xl lg:text-left py-16 md:py-20 '>
					<GitColumn />
					<GmailColumn />
					<DiscordColumn />
				</div>

				<div className='mt-6 relative z-10'>
					<ProjectLink />
				</div>

				<div className='bottom-12 md:absolute h-6 w-6 opacity-100 cursor-default'>
					<div className='absolute w-7 h-2 chevron'></div>
					<div className='absolute w-7 h-2 chevron'></div>
					<div className='absolute w-7 h-2 chevron'></div>
				</div>
			</div>
		</div>
	)
}
