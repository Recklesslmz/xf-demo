<template>
  <div>
    <mt-header class='title-bg' :title="dataMsg.title">
      <mt-button icon="back" @click='back' slot="left"></mt-button>
    </mt-header>

    <div class="detail-top-content">
      <div class="detail-top-img">
        <img :src="dataMsg.images.large">
      </div>
      <div class="detail-top-main">
        <div class="name">{{dataMsg.title}}</div>
        <div class="classify">
          <span v-for="item in dataMsg.genres">{{item}} </span></div>
        <div class="state">
          <span v-for="item in dataMsg.countries">{{item}}</span></div>
        <div class="duration" v-for="item in dataMsg.durations" v-if="item.indexOf('中国') > 0">{{item}}</div>
        <div class="time" v-for="item in dataMsg.pubdates" v-if="item.indexOf('中国') > 0">{{item}}</div>
      </div>
    </div>
    <div class="detail-middle-desc">
      <div class="detail-people">
        <div>
          <span>{{dataMsg.ratings_count}}人想看</span>
        </div>
        <div>
          <span>{{dataMsg.reviews_count}}人看过</span>
        </div>
      </div>
      <div class="detail-desc">
        <div>
          {{dataMsg.summary}}
        </div>
      </div>
    </div>
    <v-spinner v-if='guodu'></v-spinner>
  </div>

</template>

<script type="text/ecmascript-6">
 import spinner from '../components/spinner.vue'
  export default {
    data(){
      return {
        dataMsg: '',
        guodu:true
      }
    },
    components:{
      'v-spinner':spinner
    },
    created(){
      this.guodu = false;
      const url = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
      this.$http.jsonp(url)
        .then(function (response) {
          this.dataMsg = response.data;
          console.log(this.dataMsg)
        })
        .catch(function (response) {
        })
    },
    methods: {
      back(){
        this.$router.push({path:'/Hot'})
      }
    }
  }

</script>
<style lang="scss">
  .title-bg {
    background: #ff0000;
  }

  .detail-top-content {
    width: 100%;
    overflow: hidden;
    background: #b4b1b1;
    .detail-top-img {
      float: left;
      width: 30%;
      margin: {
        top: 1rem;
        left: 1rem;
        bottom: 1rem;
      }
    ;
      img {
        width: 100%;
        border: 1px solid white;
      }
    }
    .detail-top-main {
      float: left;
      width: 60%;
      margin: {
        left: 1rem;
        top: 1rem;
      }
      .name {
        font: {
          size: 1.3rem;
          weight: 400;
        }
      ;
      }
      .classify, .duration, .state, .time {
        margin: {
          top: .5rem;
        }
      ;
        color: #6b6868;
      }
    }
  }

  .detail-middle-desc {
    background: #e5e9f2;
    .detail-people {
      display: flex;
      text-align: center;
      padding: {
        top: 1rem;
      }
    ;
      div {
        flex: 1;
        span {
          height: 1.5rem;
          width: 7.5rem;
          background: #ff0000;
          color: white;
          padding: {
            top: .5rem;
          }
        ;
          border: {
            radius: .2rem;
          }
        ;
          display: inline-block;
        }
      }
    }
    .detail-desc {
      width: 96%;
      margin: {
        left: 2%;
        top: 1rem;
      }
    ;
      div {
        line-height: 1.5rem;
        font: {
          size: 1.1rem;
        }
      ;
        color: #555;
      }
    }
  }

</style>
