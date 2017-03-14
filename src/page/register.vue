<template>
  <div class="register">
    <mt-header title="登录">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button slot="right">注册</mt-button>
    </mt-header>
    <div class="tab">
      <div @click="getAmount" :class='styleObj' class="password">账号密码登录</div>
      <div @click="getMobile" :class='styleObj2' class="phone">手机号码快捷登录</div>
    </div>
    <div>
      <div class="acountLogin" v-if='styleObj.isActive'>
        <mt-field v-model='mobile' label="账号" placeholder="请输入手机号码" type='tel'></mt-field>
        <mt-field v-model='password' label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-button class='resister-btn' type="danger" @click='submit'>注册</mt-button>
        <div class="register-ques">遇到问题？</div>
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
        mobile:'',
        password:'',
      }
    },
    methods: {
      submit(){
        this.$http.get('/api/Register').then(response => {
          const dataMobile = response.data.data.mobile;
          const password = response.data.data.password;
          if(this.mobile != dataMobile || this.password != password){
            alert('用户信息不正确，请重新填写')
          }else if(this.mobile === dataMobile || this.password === password){
            this.$router.replace('/home')
          }
        }).then(blob => {

        });

      },

      getAmount(){
        this.styleObj2 = {
          isActive: false,
          isNotActive: true
        }
        this.styleObj = {
          isActive: true,
          isNotActive: false
        }
      },
      getMobile(){
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
          top:2rem;
        };
      }
      .register-ques{
        text-align: center;
        margin:{
          top:1rem;
        };
        color: #cccccc;
        font: {
          weight: 300;
        };
      }
    }
  }

  .register-btn {
    width: 10rem;
    margin: {
      top: 2rem;
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
