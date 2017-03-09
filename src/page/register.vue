<template>
  <div class="register">
    <v-header></v-header>
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-button type="primary" @click="submit" class='register-btn'>注册</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header'
  export default {
    data() {
      return {

      }
    },
    methods:{
      submit(){
        this.$router.replace('/home')
      }
    },
    components:{
      'v-header':header
    }
  }


</script>
<style lang="scss">
  .register{
    color:red;
  }
  .register-btn{
    width:10rem;
    margin: {
      top:1rem;
    };
  }
</style>
