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