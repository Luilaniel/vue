const STORAGE_KEY = 'carData';

const state = {
    cars: JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
};

const getters = {
    getCars: state => state.cars
};

const mutations = {
    ADD_CAR(state, car) {
        const newCar = {
            id: Date.now(),
            ...car
        };
        state.cars.push(newCar);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cars));
    },
    DELETE_CAR(state, id) {
        state.cars = state.cars.filter(car => car.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cars));
    }
};

const actions = {
    addCar({ commit }, car) {
        commit('ADD_CAR', car);
    },
    deleteCar({ commit }, id) {
        commit('DELETE_CAR', id);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
