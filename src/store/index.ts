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
      const currentRoomNumber = state._floors[id].rooms.length;
      const newRoom: Room = {
        id: currentRoomNumber,
        name: `Sala ${currentRoomNumber + 1}`,
        capacity: 0,
        occupation: 0
      }
      state._floors[id].rooms.push(newRoom);
    }
  }
});

export function useStore () {
  return baseUseStore(key)
}
