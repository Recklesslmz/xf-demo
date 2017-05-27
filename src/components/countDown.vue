<template>
  <div>
    <div class="timer" @click='startTimer'>{{timer == 10 ? '点击获取验证码' : timer}}</div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      headerProps:Object
    },
    data () {
      return {
        timer: 10,       //默认倒数30秒
        stop: false,   //默认是停止的，但界面加载之后会变成false
        Interval: null,  //setInterval的对象
        isClickFlag:true
      }
    },
    methods: {
      update () {
        if (this.timer <= 0) {
          this.timer = 10;

        }
        else {
          this.timer--;
          if(this.timer == 0){
            clearInterval(this.Interval);
            this.timer = 10;
            this.isClickFlag = true;
          }
        }
      },
      startTimer () {
        //如果是false就开始倒计时，如果是true就停止倒计时
        // _this = this;
        if(this.isClickFlag == true){
          this.isClickFlag = false;
          const date = new Date()
          const url = this.headerProps.commonUrl;
          const mobile = this.headerProps.Phone
          this.$http.get(url +'/service/restful/sms?mobile='+ mobile + "&templateId=001&t=" + date).then(response => {
            console.log(response)
          }, response => {
            // error callback
          });
          if (this.stop == false) {
            this.Interval = setInterval(this.update, 1000);
            console.log(this.stop)
          }
          else {
            clearInterval(this.Interval);
          }
        }
        // this.stop = !this.stop;
      }
    },
  }

</script>
<style lang="scss">
  .timer{
    background: #00a341;
    padding:{
      top:.3rem;
      left:1rem;
      right: 1rem;
      bottom: .3rem;
    };
    color:#fff;
    border:{
      radius: .1rem;
    };
  }

</style>
