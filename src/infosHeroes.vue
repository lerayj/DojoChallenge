<template>
<div class="bg" :style="{ 'background-image': 'url(' + heroesBg + ')' }">TOTO</div>
</template>

<script>
  import lodash from 'lodash'
  import { mapActions, mapState } from 'vuex'

  export default {
    data (){
      return{
               
      }
    },
    computed: mapState({
      heroesBg: state => {
        if(state.currentHero)
          return state.currentHero.attributes.image_splash
        else
          return '/public/images/heroes_splash/12.png'
      }
    }),
    methods: {

    } 
  }
</script>


<style type="text/css">
  .bg{
    background-image: url('/public/images/heroes_splash/12.png');
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0 !important;   
  }

</style>