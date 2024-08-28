'use client'
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export function GmailColumn() {
	const [textToCopy, setTextToCopy] = useState('NobidoN.tim@gmail.com') // The text you want to copy
	const [copyStatus, setCopyStatus] = useState(false) // To indicate if the text was copied

	const onCopyText = () => {
		setCopyStatus(true)
		setTimeout(() => setCopyStatus(false), 2000) // Reset status after 2 seconds
	}

	return (
		<div className='columns-1 select-none'>
			<CopyToClipboard text={textToCopy} onCopy={onCopyText}>
				<div
					className='flex justify-center md:max-lg:flex px-5 py-4 select-none group transition-colors
				rounded-full border border-transparent bg-gradient-to-r from-violet-400/70 to-fuchsia-500/70
				hover:shadow-lg hover:shadow-cyan-500/50 hover:border-neutral-700 hover:bg-neutral-800/30 
				bg-neutral-800/30 border-neutral-700 md:bg-transparent md:border-transparent md:from-transparent'
				>
					<a target='_blank' rel='noopener noreferrer'>
						<h2 className='md:mb-3 text-2xl text-center font-semibold'>
							Gmail{' '}
							<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
								-&gt;
							</span>
						</h2>
					</a>
				</div>
			</CopyToClipboard>
			<div className='pt-3 select-auto'>
				<p className='left-0 top-0 p-4 flex w-full justify-center border backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit rounded-xl'>
					<code className='select-all font-mono font-bold'>
						NobidoN.Tim@gmail.com
					</code>
				</p>
			</div>
			{copyStatus && (
				<p className='text-center font-mono font-bold pt-3'>
					Gmail copied to clipboard
				</p>
			)}
		</div>
	)
}
