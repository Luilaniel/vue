import Vue from 'vue';
import Vuex from 'vuex';

import cars from './modules/cars';
import weather from './modules/weather';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cars,
        weather
    }
});
