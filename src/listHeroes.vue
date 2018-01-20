<template>
  <div>
    <v-text-field placeholder="Search" v-model="search" class="pl-4 pr-4 mb-3" prepend-icon="search" hide-details single-line></v-text-field>

    <v-list dense>
      <v-list-tile avatar v-for="item in searchHeroes()" v-bind:key="item.id" @click="focusHero(item.id)">
            <v-list-tile-avatar >
              <img v-bind:src="item.attributes.image_portrait"></v-list-tile-avatar>
            </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.attributes.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import lodash from 'lodash'

export default {
  props: ['heroes'],
  data (){
    return{
      search: ''        
    }
  },
  methods: {
    searchHeroes(val){
      if(this.search != '')
        return _.filter(this.heroes, hero => hero.attributes.name.toLowerCase().startsWith(this.search.toLowerCase()))    
      else
        return this.heroes
    },
    ...mapActions(['focusHero'])
  } 
}
</script>