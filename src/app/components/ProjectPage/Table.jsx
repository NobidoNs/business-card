import React from 'react'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'
import { MapImage } from '../../components/ProjectPage/Images/Map'
import { SpreadImage } from '../../components/ProjectPage/Images/Spread'
import TanksInfo from './TableData/Tanks'
import MapInfo from './TableData/Map'
import SpreadInfo from './TableData/Spread'
import TanksBG from './ImagesBG/Tanks'
import MapBG from './ImagesBG/Map'
import SpreadBG from './ImagesBG/Spread'

export default function TableProjects() {
	return (
		<div className='grid grid-rows-2 grid-cols-3 w-full'>
			<div className='select-none p-5 rounded-l relative'>
				<TanksImage />
				<TanksBG />
			</div>
			<div className='select-none p-5 rounded-l relative'>
				<MapImage />
				<MapBG />
			</div>
			<div className='select-none p-5 rounded-l relative'>
				<SpreadImage />
				<SpreadBG />
			</div>

			<div className='col-span-3 px-2'>
				<TanksInfo />

				<MapInfo />

				<SpreadInfo />
			</div>
		</div>
	)
}
