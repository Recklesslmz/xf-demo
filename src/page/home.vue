<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for='item in goods' class="menu-item">
          <span class="text">
            {{item.name}}
          </span>
          </li>
        </ul>

      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for='item in goods' class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for='food in item.foods' class="food-item">
                <div class="icon">
                  <img :src='food.icon'>
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extera">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span>￥{{food.price}}</span>
                    <span>￥{{food.price}}</span>
                  </div>
                </div>

              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        goods: {}
      }
    },
    created(){

    },
    mounted(){
      this.getMenu();
    },
    methods: {
      getMenu(){
        this.$http.get('/api/goods').then((response) => {
          response = response.body;
          if (response.errno === 0) {
            this.goods = response.data;
            console.log(this.goods);
            this.$nextTick(() => {
            });
          }
        });
      },
      test(){

      }

    }
  }


</script>
<style lang="scss">
  .goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item {
        padding: {
          left: 12px;
        }
      ;
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;

        .text {
          font: {
            size: 14px;
          }
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          border: {
            bottom: 1px solid #dcdcdc;
          }
        ;
        }
      }
    }
  }


</style>
