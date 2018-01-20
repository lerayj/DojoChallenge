import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.css'

import request from 'request';
import lodash from 'lodash'

Vue.use(Vuetify)
Vue.use(Vuex)

const BASE_URL = "http://localhost:5000";

const store = new Vuex.Store({
  state: {
    heroes: null,
    loading: false,
    currentHero: null
  },
  mutations: {
    setHeroesImg (state, data) {
      state.heroes = data
    },
    isLoading(state, data) {
    	state.loading = data
    },
    setCurrentHero(state, data) {
    	state.currentHero = data
    }
  },
  actions: {
    fetchHero({ commit, dispatch }){
        store.commit('isLoading', true);
        request(BASE_URL + '/heroes', (err, res, body) => {
			store.commit('setHeroesImg', JSON.parse(body))
			store.commit('isLoading', false);
			console.log("HERE: ", this.state.heroes[0].id)
			dispatch('focusHero', this.state.heroes[0].id)
        })
    },
    focusHero(context, idHero){
    	let hero = _.find(this.state.heroes, e => e.id == idHero)
    	console.log(hero);
    	store.commit('setCurrentHero', hero);
    }
  }
})


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})