<template>
  <div>
    <!--<div id="container"></div>-->
    <div id="outer-box">
      <div id="eventInfo">事件信息</div>
      <div id="container">
      </div>
      <div id="panel">
        <div id="intro">
          <div>
            <input type="text" v-model="searchKey" placeholder="搜索"/>
            <button @click="searchShop">搜索</button>
          </div>
        </div>
        <ul id="my-list"></ul>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  #allmap {
    position: absolute;
    width: 100%;
    height: 800px;
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        searchKey: '',
        searchList: []
      }
    },
    mounted() {
      this._initMap()
    },
    methods: {
      _initMap() {
        let _this = this
        var map, geolocation;
        //加载地图，调用浏览器定位服务
        map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 10
        });
        map.plugin('AMap.Geolocation', function () {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition: 'RB'
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
          AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
          console.log(data.position.lat)
          console.log(data.position.lng)
          _this.$http.post(commonUrl + '/restful/shop?op=list',
            {
              partnerId: '6ac642f1-59f8-4e6f-a07a-bc8d581025d9',
              latitude: JSON.stringify(data.position.lat),
              longitude: JSON.stringify(data.position.lng)
            }
          ).then(response => {
            console.log(response)

            _this.searchList = response.body.shops
            _this.search();
          }, response => {

          })

        }

        //解析定位错误信息
        function onError(data) {

        }

      },
      search(){
        const _this = this
        var map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 15,
        });
        new AMap.Marker({
          map: map,
        });
        AMapUI.loadUI(['misc/MarkerList', 'overlay/SvgMarker', 'overlay/SimpleInfoWindow'],
          function (MarkerList, SvgMarker, SimpleInfoWindow) {
            var markerList = new MarkerList({
              map: map,
              getDataId: function (dataItem, index) {
                //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
                return dataItem.id;
              },
              getPosition: function (dataItem) {
                return dataItem.postion;
              },
              //返回数据项对应的Marker
              getMarker: function (dataItem, context, recycledMarker) {

//                var label = dataItem.shopName;
//
//                //存在可回收利用的marker
//                if (recycledMarker) {
//                  //直接更新内容返回
//                  recycledMarker.setIconLabel(label);
//                  return recycledMarker;
//                }

                //返回一个新的Marker
                return new SvgMarker(
                  new SvgMarker.Shape.SquarePin({
                    height: 20,
                    strokeWidth: 1,
                    strokeColor: '#ccc',
                    fillColor: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png'
                  }), {
//                    iconLabel: label,
                    containerClassNames: 'my-svg-marker',
                    showPositionPoint: true
                  })
              },
              getInfoWindow: function (dataItem, context, recycledInfoWindow) {

                if (recycledInfoWindow) {
                  //存在可回收利用的infoWindow, 直接更新内容返回
                  recycledInfoWindow.setInfoTitle(dataItem.title);
                  recycledInfoWindow.setInfoBody(dataItem.desc);
                  return recycledInfoWindow;
                }

                //返回一个新的InfoWindow
                return new SimpleInfoWindow({
                  offset: new AMap.Pixel(0, -57),
                  infoTitle: dataItem.id,
                  infoBody: dataItem.desc
                });
              }

            });

            //监听选中改变
            markerList.on('selectedChanged', function (event, info) {
              console.log(info.selected.data.shopName)
            });

            //展示该数据
            markerList.render(_this.searchList);
          });
      },
      geocoder(){
        let _this = this
        var geocoder = new AMap.Geocoder({
          city: _this.searchKey, //城市，默认：“全国”
          radius: 1000 //范围，默认：500
        });
        //地理编码,返回地理编码结果
        geocoder.getLocation(_this.searchKey, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            _this.geocoder_CallBack(result);
          }
        });
      },
      geocoder_CallBack(data){
        let _this = this
        console.log(data.geocodes[0].location.lng)
        _this.$http.post(commonUrl + '/restful/shop?op=list',
          {
            partnerId: '6ac642f1-59f8-4e6f-a07a-bc8d581025d9',
            latitude: JSON.stringify(data.geocodes[0].location.lat),
            longitude: JSON.stringify(data.geocodes[0].location.lng)
          }
        ).then(response => {
          console.log(response)

          _this.searchList = response.body.shops
          _this.search();
        }, response => {

        })
      },
      searchShop(){
        this.geocoder()
      }
    }
  }
</script>
