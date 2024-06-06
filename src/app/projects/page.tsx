import Image from 'next/image'
import { HomeIcon } from '@heroicons/react/24/outline'
export default function Page() {
	const LinkIcon = link.icon
	return (
		<main className='flex min-h-9 flex-col justify-between pt-2 pl-1 bg-local select-none'>
			<div className='rounded-2xl border border-transparent border-neutral-500 bg-gradient-to-r from-gray-400 to-gray-500 px-5 py-4 size-fit transition-colors hover:shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-100  hover:dark:bg-neutral-800/30'>
				<h2 className='text-2xl font-semibold'>To Main </h2>
				<LinkIcon className='w-6' />
			</div>
		</main>
	)
}
