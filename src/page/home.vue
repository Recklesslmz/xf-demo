<template>
  <div>
    <v-top :headerProps='headerProps'></v-top>
    <v-time></v-time>
  </div>
</template>
<script type="text/ecmascript-6">
  import top from  '../components/top.vue'
  import {getCommon} from '../common/common.js'
  import time from '../components/countDown.vue'
  export default {
    data(){
      return {
        headerProps: {
          name: '首页',
          backShow: false
        },
        commonUrl:getCommon().commonUrl,
        openId:getCommon().openId,
        partnerId:getCommon().partnerId
      }
    },
    mounted(){
      this.getMemberInfo();

    },
    methods:{
      getMemberInfo(){
        // this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
        //
        // }, response => {
        //
        // });
      },
    },
    components: {
      'v-top': top,
      'v-time':time
    }
  }

</script>
<style lang="scss">
  .home_top {
    width: 100%;
    height: 2.5rem;
    background: #ff0000;
    text-align: center;
    div {
      color: white;
      width: 50%;
      float: left;
      line-height: 2.5rem;
    }
  }

</style>
