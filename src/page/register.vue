<template>
  <div>
    <v-top :headerProps='headerProps'></v-top>
    <div class="logo">
      <img src="../assets/img/logo.png">
    </div>
    <div class="register-input">
      <input type="tel" v-model='headerProps.Phone' placeholder="请输入手机号码">
      <img src="../assets/img/mobile.png">
    </div>
    <div class="register-input">
      <input type="number" v-model="headerProps.Code" placeholder="请输入验证码">
      <img src="../assets/img/code.png">
    </div>
    <div class="register-code">
      <v-time class='cut-down' :headerProps='headerProps'></v-time>
      <!--<button id="btn">获取验证码</button>-->
    </div>

    <div class="register-btn">

      <button @click="submitRegister">立即注册</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import top from '../components/top.vue'
  import time from '../components/countDown.vue'
  import {getCommon} from '../common/common.js'
  export default {
    data(){
      return {
        headerProps: {
          name: '注册',
          backShow: false,
          Phone: '',
          Code: '',
          commonUrl: getCommon().commonUrl,
          openId: getCommon().openId,
          partnerId: getCommon().partnerId
        },

      }
    },
    mounted(){
    },
    methods: {
      submitRegister(){
        this.$router.push({path: '/'})
      },
      autoLocation(){

      }
    },
    watch: {},
    components: {
      'v-time': time,
      'v-top': top
    }
  }


</script>
<style lang="scss">
  .logo {
    text-align: center;
    margin: {
      top: 1.2rem;
    }
  ;
    img {
      width: 40%;
    }
  }

  .register-btn {
    width: 90%;
    height: 2.5rem;

    text-align: center;
    line-height: 2rem;
    margin-top: 2rem;
    margin-left: 5%;

    button {
      color: white;
      width: 100%;
      border: none;
      background: #00a341;
      font-size: .8rem;
      height: 2.5rem;
      border: {
        radius: .2rem;
      }
    }
  }

  .register-input {
    margin-top: 1rem;
    position: relative;
    width: 90%;
    margin-left: 5%;
    input::-webkit-input-placeholder {
      position: relative;
      left: 1rem;
      font: {
        weight: 100;
      }
    ;
    }

    input {
      padding-left: 15%;
      width: 85%;
      height: 3.2rem;
      border: none;
      border: {
        radius: .2rem
      }
      font: {
        size: 1rem;
      }
    ;
      -webkit-box-shadow: 0 0 8px #aaa;
      box-shadow: 0 0 8px #aaa;
      -webkit-appearance: none;
    }
    img {
      width: 12%;
      position: absolute;
      top: .56rem;
      left: .5rem;

    }
  }

  .register-code {
    float: right;
    position: relative;
    top: -2rem;
    left: -1.5rem;
    .cut-down {
      position: relative;
      top: -.1rem;
    }
    button {
      border: none;
      font-size: .6rem;
      background: #00a341;
      color: white;
      height: 1.5rem;
      line-height: 1rem;
      border: {
        radius: .2rem;
      }

    }
  }
</style>
