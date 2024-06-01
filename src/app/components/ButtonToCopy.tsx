'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export function ButtonToCopy() {
	const [textToCopy, setTextToCopy] = useState('NobidoN.tim@gmail.com') // The text you want to copy
	const [copyStatus, setCopyStatus] = useState(false) // To indicate if the text was copied

	const onCopyText = () => {
		setCopyStatus(true)
		setTimeout(() => setCopyStatus(false), 2000) // Reset status after 2 seconds
	}

	return (
		<div>
			<CopyToClipboard text={textToCopy} onCopy={onCopyText}>
				<div className='flex justify-center md:max-lg:flex pt-2 select-none group rounded-full border border-transparent px-5 py-4 transition-colors hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-300 hover:bg-cyan-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
					<a target='_blank' rel='noopener noreferrer'>
						<h2 className='mb-3 text-2xl text-center font-semibold'>
							Gmail{' '}
							<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
								-&gt;
							</span>
						</h2>
					</a>
				</div>
			</CopyToClipboard>
			<div className='pt-5 select-auto'>
				<p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					<code className='font-mono font-bold'>NobidoN.tim@gmail.com</code>
				</p>
			</div>
			{copyStatus && (
				<p className='text-center font-mono font-bold'>
					Text copied to clipboard!
				</p>
			)}
		</div>
	)
}
