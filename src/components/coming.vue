<template>

  <div>
    <v-header></v-header>
    <div>这是即将上映界面</div>
    <!--<mt-spinner :size="60" color="#ff0000" type="fading-circle"></mt-spinner>-->
    <v-spinner v-if='guodu'></v-spinner>
    <v-star></v-star>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import spinner from '../components/spinner.vue'
  import star from '../components/star.vue'
  export default {
    data(){
      return{
        guodu:true
      }
    },
    created(){
      this.guodu = false;
    },
    components: {
      'v-header': header,
      'v-spinner': spinner,
      'v-star':star
    }
  }
</script>
<style lang="scss">

</style>
