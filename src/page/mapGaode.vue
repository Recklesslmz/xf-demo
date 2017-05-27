<template>
  <div>
    <div id="mapContainer"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    mounted(){
      this.getMap()
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
            city: "建邺区", //城市
            map: map//,
            //panel: "panel"
          });
          //关键字查询
          console.log(placeSearch)
          placeSearch.search('麦当劳', function (status, result) {
            console.log(result)
          });
        });
        AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {

          var poiPicker = new PoiPicker({
            input: 'searchInput',
            placeSearchOptions: {
              map: map,
              pageSize: 10
            },
            searchResultsContainer: 'searchResults'
          });

          poiPicker.on('poiPicked', function(poiResult) {
            console.log(1)

            poiPicker.hideSearchResults();

            var source = poiResult.source,
              poi = poiResult.item;

            if (source !== 'search') {

              //suggest来源的，同样调用搜索
              poiPicker.searchByKeyword(poi.name);

            } else {

              //console.log(poi);
            }
          });

          poiPicker.onCityReady(function() {
            poiPicker.searchByKeyword('美食');
          });
        });
      }
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
