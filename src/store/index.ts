import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';
import { Floor, Room, State } from '../interfaces';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    _floors: [],
    _selectedFloorId: 0
  },
  getters: {
    getFloors(state: State) {
      return state._floors;
    },
    getSelectedFloorId(state: State) {
      return state._selectedFloorId;
    }
  },
  actions: {
    setFloors({ commit }, floors: Floor[]) {
      commit('SET_FLOORS', floors);
    },
    setSelectedFloorId({ commit }, id: number) {
      commit('SET_SELECTED_FLOOR_ID', id);
    },
    addRoom({ commit }, id: number) {
      commit('ADD_ROOM', id);
    },
    deleteRoom({ commit }, ids: number[]) {
      commit('DELETE_ROOM', ids);
    }
  },
  mutations: {
    SET_FLOORS(state: State, floors: Floor[]) {
      state._floors = floors.slice();
    },
    SET_SELECTED_FLOOR_ID(state: State, id: number) {
      state._selectedFloorId = id;
    },
    ADD_ROOM(state: State, id: number) {
      const lastRoom = state._floors[id].rooms.slice().pop();
      const newRoomId = lastRoom ? lastRoom.id + 1 : 0;
      const newRoom: Room = {
        id: newRoomId,
        name: `Sala ${newRoomId + 1}`,
        capacity: 0,
        occupation: 0
      }
      state._floors[id].rooms.push(newRoom);
    },
    DELETE_ROOM(state: State, ids: number[]) {
      const rooms = state._floors[ids[0]].rooms;
      const index = rooms.findIndex((el: Room) => el.id === ids[1]);
      rooms.splice(index, 1);
    }
  }
});

export function useStore () {
  return baseUseStore(key)
}
