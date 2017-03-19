<template>
  <div class="header-top">
    <a class="header-top-back" v-if='headerProps.backShow'><img src="../assets/back.png"></a>
    <div class="header-top-name">{{headerProps.name}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      headerProps:Object
    }
  }
</script>
<style lang="scss">
  .header-top {
    .header-top-back{
      text-align: left;
      img{
        width:7%;
        float: left;
        position: relative;
        top:.5rem;
      }
    }
    .header-top-name{
      line-height: 3rem;
      color:#fff;
    }
    width: 100%;
    height: 3rem;
    background: #00a341;
    text-align: center;
  }

</style>
