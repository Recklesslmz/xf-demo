<template>
  <v-header></v-header>
</template>
<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  export default {
     data(){
       return{

       }
     },
    components:{
       'v-header':header
    }
  }

</script>
<style lang="scss">
  .home_top{
    width:100%;
    height:2.5rem;
    background:#ff0000;
    text-align: center;
    div{
      color:white;
      width:50%;
      float: left;
      line-height: 2.5rem;
    }
  }

</style>
