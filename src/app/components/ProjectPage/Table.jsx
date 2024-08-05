import React from 'react'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'
import { MapImage } from '../../components/ProjectPage/Images/Map'
import { SpreadImage } from '../../components/ProjectPage/Images/Spread'
import TanksInfo from './TableData/Tanks'
import MapInfo from './TableData/Map'
import SpreadInfo from './TableData/Spread'

export default function TableProjects() {
	return (
		<div className='grid grid-rows-2 grid-cols-3 w-full'>
			<div className='select-none p-5 rounded-l relative'>
				<TanksImage />
				<div className='absolute top-2 h-full w-full left-0'>
					<div className='pl-2 pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md bg-black opacity-0 z-20'
							style={{
								backgroundImage:
									'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
							}}
							id='TanksDiv'
						>
							{' '}
						</div>
					</div>
				</div>
			</div>
			<div className='select-none p-5 rounded-l relative'>
				<MapImage />
				<div className='absolute top-2 h-full w-full left-0'>
					<div className='pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md bg-black opacity-0 z-20'
							style={{
								backgroundImage:
									'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
							}}
							id='MapDiv'
						>
							{' '}
						</div>
					</div>
				</div>
			</div>
			<div className='select-none p-5 rounded-l relative'>
				<SpreadImage />
				<div className='absolute top-2 h-full w-full left-0'>
					<div className='pr-2 pb-1.5 h-full'>
						<div
							className='border-x-2 border-t h-full rounded-t-md bg-black opacity-0 z-20'
							style={{
								backgroundImage:
									'linear-gradient(0deg, #65d3ba,#2cfab8,#3eef74)',
							}}
							id='SpreadDiv'
						>
							{' '}
						</div>
					</div>
				</div>
			</div>

			<div className='col-span-3 px-2'>
				<div
					className='border-2 rounded-tl-none rounded-lg pl-2 h-full bg-blue opacity-0 z-10'
					style={{
						backgroundImage: 'linear-gradient(0deg, #3eef74,#2cfab8,#65d3ba)',
					}}
					id='TanksInfo'
				>
					test
				</div>

				<div
					className='relative -top-[295px] border-2 rounded-lg pl-2 h-full bg-blue opacity-0 z-10'
					style={{
						backgroundImage: 'linear-gradient(0deg, #3eef74,#2cfab8,#65d3ba)',
					}}
					id='MapInfo'
				>
					test2
				</div>

				<div
					className='relative -top-[590px] border-2 rounded-tr-none rounded-lg pl-2 h-full bg-blue opacity-0 z-10'
					style={{
						backgroundImage: 'linear-gradient(0deg, #3eef74,#2cfab8,#65d3ba)',
					}}
					id='SpreadInfo'
				>
					test3
				</div>
			</div>

			{/* <TanksInfo />
			<MapInfo />
			<SpreadInfo /> */}
		</div>
	)
}
