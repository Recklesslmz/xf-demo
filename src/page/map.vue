<template>
  <div>
    <div id="allmap"></div>
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
    data(){
      return {
        lng: '',
        lat: ''
      }
    },
    mounted(){
      this._initMap()
    },
    methods: {
      _initMap(){
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);

            map.centerAndZoom(new BMap.Point(r.point.lng, r.point.lat), 14);

            var local = new BMap.LocalSearch(map, {
              renderOptions: {map: map}
            });

            local.searchInBounds("麦当劳", map.getBounds());

            map.addEventListener("dragend", function () {
              map.clearOverlays();
              local.searchInBounds("麦当劳", map.getBounds());
            });

            console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
          }
          else {
            console.log('failed' + this.getStatus());
          }
        }, {enableHighAccuracy: true})

      }
    }
  }
</script>
