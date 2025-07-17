const STORAGE_KEY = 'carData';

export default {
    namespaced: true,
    state: {
        cars: JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    },
    getters: {
        getCars: state => state.cars
    },
    mutations: {
        ADD_CAR(state, car) {
            state.cars.push(car);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cars));
        },
        DELETE_CAR(state, index) {
            state.cars.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cars));
        }
    },
    actions: {
        addCar({ commit }, car) {
            commit('ADD_CAR', car);
        },
        deleteCar({ commit }, index) {
            commit('DELETE_CAR', index);
        }
    }
};