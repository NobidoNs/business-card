import React from 'react'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'
import { MapImage } from '../../components/ProjectPage/Images/Map'
import { SpreadImage } from '../../components/ProjectPage/Images/Spread'
import TanksInfo from './TableData/Tanks'
import MapInfo from './TableData/Map'
import SpreadInfo from './TableData/Spread'

export default function TableProjects() {
	return (
		<div className='table size-full table-fixed'>
			<div className='table-row-group'>
				<div className='table-row'>
					<TanksImage />
					<MapImage />
					<SpreadImage />
				</div>
				<div className='table-row'>
					<TanksInfo />
					<MapInfo />
					<SpreadInfo />
				</div>
			</div>
		</div>
	)
}
