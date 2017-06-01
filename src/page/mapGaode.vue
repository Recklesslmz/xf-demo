<template>
  <div>
    <div id="mapContainer"></div>
    <div>limuzi</div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    mounted(){
      this.getMap()
      this.geocoder()
    },
    methods: {
      getMap(){
        var map = new AMap.Map("mapContainer", {
          resizeEnable: true,
        });
        AMap.service(["AMap.PlaceSearch"], function () {
          var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 3500,
            pageIndex: 1,
            city: "东莞", //城市
            map: map//,
            //panel: "panel"
          });
          //关键字查询
          console.log(placeSearch)
          placeSearch.search('肯德基', function (status, result) {
            console.log(result)
          });
          map.on('hotspotclick',function(result) {
            console.log(result)
          });
        });

      },
      geocoder(){
        let _this = this
        var geocoder = new AMap.Geocoder({
          city: "东莞", //城市，默认：“全国”
          radius: 1000 //范围，默认：500
        });
        //地理编码,返回地理编码结果
        geocoder.getLocation("东莞", function (status, result) {
          console.log(result)
          if (status === 'complete' && result.info === 'OK') {
            _this.geocoder_CallBack(result);
          }
        });
      },
      geocoder_CallBack(data){
        console.log(data)
      },
    }
  }

</script>
<style lang="scss">
  #mapContainer {
    width: 100%;
    height: 800px;
  }

  #panel {
    position: absolute;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
  }

</style>
