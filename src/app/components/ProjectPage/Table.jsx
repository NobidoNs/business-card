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
				<div className='absolute top-2 h-full w-full left-1'>
					<div className='border h-full left-1'> a</div>
				</div>
			</div>
			<div className='select-none p-5 rounded-l'>
				<MapImage />
			</div>
			<div className='select-none p-5 rounded-l'>
				<SpreadImage />
			</div>

			<div className='col-span-3 pl-1'>
				<div className='border rounded-lg pl-2 h-full'>test</div>
			</div>
			{/* <TanksInfo />
			<MapInfo />
			<SpreadInfo /> */}
		</div>
	)
}
