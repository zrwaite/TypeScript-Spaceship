import NavigationController from '../../src/subsystems/navigationController.js'
import YourDefenceController from './DefenseController.js'
import YourPropulsionController from './PropulsionController.js'
import YourSensorsController from './SensorsController.js'
import { ShipStatus, tryWarpType, MapData, tryLandType } from '../types.js'
import { Vector2 } from '../helpers.js'

export default class YourNavigationController extends NavigationController {
	// To get other subsystem information, use the attributes below.
	defence?: YourDefenceController
	sensors?: YourSensorsController
	propulsion?: YourPropulsionController
	// Define additional attributes here
	navigationUpdate(shipStatusInfo: ShipStatus, warp: tryWarpType, land: tryLandType, mapData: MapData) {
		//Student code goes here
	}
}
