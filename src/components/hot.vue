<template>
  <div>
    <v-header></v-header>
    <div class="hot-content" v-for="item in subjects">
      <div class="currentImg">
        <img :src="item.images.small">
      </div>
      <div class="desc">
        <div class="name">{{item.title}}</div>
        <div class="point" v-for="item2 in item.directors">导演:{{item2.name}}</div>
        <div class="actor">主演:<span class="detail" v-for='item3 in item.casts'>{{item3.name}}</span></div>
      </div>

    </div>

    <!--<div>这是热映界面</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  export default {
    data(){
      return {
        subjects: []
      }
    },
    components: {
      'v-header': header
    },
    created: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(function (response) {
          const list = JSON.parse(response.bodyText);
          this.subjects = list.subjects;
        })
        .catch(function (response) {
        })
    },
  }
</script>
<style lang="scss">
  .hot-content {
    width: 96%;
    background: #f8f8f8;
    overflow: hidden;
    margin: {
      left: 2%;
      top: .5rem;
    }
  ;
    .currentImg {
      float: left;
      width: 17%;

    }
    .desc {
      float: left;
      width: 67%;
      margin: {
        left: .7rem;
      }
    ;
      .name {
        margin: {
          top: .3rem;
        }
      ;
        font: {
          size: 1.2rem;
          weight: 400;
        }
      ;
      }
      .point {
        margin: {
          top: .5rem;
        }
      ;
        font: {
          size: .9rem;
          weight: 300;
        }
      ;
        color: #999;
        span {
          color: #fab60f;
          font: {
            size: 1rem;
            weight: 400;
          }
        ;
        }
      }
      .detail {
        @extend .point;
      }
      .actor{
        margin: {
          top:.5rem;
        };
        font: {
          size: .9rem;
          weight: 300;
        }
        color: #999;
      }
    }
  }

</style>
