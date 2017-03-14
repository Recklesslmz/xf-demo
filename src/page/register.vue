<template>
  <div class="register">
    <mt-header title="登录">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button slot="right">注册</mt-button>
    </mt-header>
    <div class="tab">
      <div @click="amount" :class='styleObj' class="password">账号密码登录</div>
      <div @click="mobile" :class='styleObj2' class="phone">手机号码快捷登录</div>
    </div>
    <div>
      <div class="acountLogin" v-if='styleObj.isActive'>
        <mt-field label="账号" placeholder="请输入手机号码" type='tel'></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-button class='resister-btn' type="danger">注册</mt-button>
      </div>
      <div v-if='!styleObj.isActive'>手机号码快捷登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import header from '../components/header'
  export default {
    data() {
      return {
        styleObj: {
          isActive: true,
          isNotActive: false
        },
        styleObj2: {
          isActive: false,
          isNotActive: true
        },
        test:1
      }
    },
    methods: {
      submit(){
        this.$router.replace('/home')
      },
      amount(){
        this.styleObj2 = {
          isActive: false,
          isNotActive: true
        }
        this.styleObj = {
          isActive: true,
          isNotActive: false
        }
      },
      mobile(){
        this.styleObj2 = {
          isActive: true,
          isNotActive: false
        }
        this.styleObj = {
          isActive: false,
          isNotActive: true
        }
      }
    },
    components: {}
  }


</script>
<style lang="scss">
  .register {
    .mint-header {
      background-color: #ff0000;
    }
    .tab {
      display: flex;
      text-align: center;
      height: 3rem;
      color: gray;
      border: {
        bottom: 1px solid #EAEAEA;
      }
    ;
      div {
        flex: 1;
        line-height: 3rem;
      }
    }
    .acountLogin{
      .resister-btn{
        width:90%;
        margin: {
          left:5%;
        };
      }
    }
  }

  .register-btn {
    width: 10rem;
    margin: {
      top: 1rem;
    }
  ;
  }

  .isActive {
    border: {
      bottom: 2px solid #ff0000;
    }
  ;
    color: red;
  }

  .isNotActive {
    color: gray;
    border-bottom: none;
  }
</style>
