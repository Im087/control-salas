export interface Room {
  id: number,
  name: string,
  capacity: number,
  occupation: number
}

export interface Floor {
  id: number,
  name: string,
  rooms: Room[]
}

export interface State {
  _floors: Floor[],
  _selectedFloorId: number
}

export interface Filter {
  isCapacityFilterActivated: boolean,
  capacityMin: number,
  capacityMax: number,
  isOccupationFilterActivated: boolean,
  occupationMin: number,
  occupationMax: number
}