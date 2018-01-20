<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
    <div v-if="loading">toto</div>
    <ListHeroes v-else :heroes="heroes"/>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>E-Sport</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="pt-0 pb-0 pl-0 pr-0">
        <v-layout justify-center align-center>
          <InfosHeroes />
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import request from 'request';
import ListHeroes from './listHeroes.vue';
import InfosHeroes from './infosHeroes.vue';

export default {
  data () {
    return {
      title: 'Esport',
      drawer: null
    }
  },
  created () {
    this.fetchHero()
  },
  components: {
    ListHeroes,
    InfosHeroes
  },
  computed: mapState({
    heroes: state => state.heroes,
    loading: state => state.loading
  }),
  methods: {
      ...mapActions(['fetchHero', 'focusHero'])
    }
  }
</script>
