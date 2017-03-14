<template>
  <div class="home_top">
    <router-link class='hot' to='/Hot'>正在热映</router-link>
    <router-link class='soon' to='/Coming'>即将上映</router-link>
    <!--<div style="color:black;">正在热映</div>-->
    <!--<div class="soon">即将上映</div>-->
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data(){
      return{
        message:'首页',
      }
    },
  }

</script>
<style lang="scss">
  .home_top{
    width:100%;
    height:2.5rem;
    background:#ff0000;
    text-align: center;
    .hot,.soon{
      color:white;
      width:50%;
      float: left;
      line-height: 2.5rem;
      text-decoration:none
    }
  }

</style>
