<template>
  <div>
    <div id="outer-box">
      <div id="eventInfo">事件信息</div>
      <div id="container">
      </div>
      <div id="panel">
        <div id="intro">
          <div>
            <input type="text" placeholder="搜索"/>
            <button @click="search">搜索</button>
          </div>
        </div>
        <ul id="my-list"></ul>
      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        searchList: []
      }
    },
    mounted(){
      this.getMap()
      this.search()
    },
    methods: {
      getMap(){
        var map = new AMap.Map('container', {
          zoom: 9
        });


      },
      search(){
        const _this = this
        this.searchList = [{
          id: 'A',
          position: [116.020764, 39.904989],
          desc: '数据_1'
        }, {
          id: 'B',
          position: [116.405285, 39.904989],
          desc: '数据_2'
        }, {
          id: 'C',
          position: [116.789806, 39.904989],
          desc: '数据_3'
        }]
        var map = new AMap.Map('container', {
          zoom: 9
        });
        AMapUI.loadUI(['misc/MarkerList', 'overlay/SvgMarker', 'overlay/SimpleInfoWindow'],
          function (MarkerList, SvgMarker, SimpleInfoWindow) {

            if (!SvgMarker.supportSvg) {
              //当前环境并不支持SVG，此时SvgMarker会回退到父类，即SimpleMarker
              alert('当前环境不支持SVG');
            }

            var markerList = new MarkerList({
              //关联的map对象
              map: map,


              //需要监听的列表节点事件
              listElementEvents: ['click', 'mouseenter', 'mouseleave'],

              //需要监听的marker事件
              markerEvents: ['click', 'mouseover', 'mouseout'],

              //需要监听的infoWindow事件
              infoWindowEvents: ['click', 'mouseover', 'mouseout'],

              //返回数据项的Id
              getDataId: function (dataItem, index) {
                //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
                return dataItem.id;
              },
              //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
              getPosition: function (dataItem) {
                return dataItem.position;
              },
              //返回数据项对应的Marker
              getMarker: function (dataItem, context, recycledMarker) {


                var label = dataItem.id;

                //存在可回收利用的marker
                if (recycledMarker) {
                  //直接更新内容返回
                  recycledMarker.setIconLabel(label);
                  return recycledMarker;
                }

                //返回一个新的Marker
                return new SvgMarker(
                  new SvgMarker.Shape.SquarePin({
                    height: 60,
                    strokeWidth: 1,
                    strokeColor: '#ccc',
                    fillColor: 'green'
                  }), {
                    iconLabel: label,
                    containerClassNames: 'my-svg-marker',
                    showPositionPoint: true
                  })
              },
              //返回数据项对应的列表节点
              getListElement: function (dataItem, context, recycledListElement) {

                var tpl = '<p><%- dataItem.id %>：<%- dataItem.desc %>';

                var content = MarkerList.utils.template(tpl, {
                  dataItem: dataItem,
                  dataIndex: context.index
                });

                if (recycledListElement) {
                  //存在可回收利用的listElement, 直接更新内容返回
                  recycledListElement.innerHTML = content;
                  return recycledListElement;
                }

                //返回一段html，MarkerList将利用此html构建一个新的dom节点
                return '<li>' + content + '</li>';
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

            markerList.on('listElementClick listElementMouseenter listElementMouseleave ' +
              'markerClick markerMouseover markerMouseout ' +
              'infoWindowClick infoWindowMouseover infoWindowMouseout',
              function (event, record) {

                var $ = MarkerList.utils.$,
                  template = MarkerList.utils.template;

                $('#eventInfo').html(template('<%- record.id%>: <%- record.data.desc %>' +
                  '<div class="eventType"><%- event.type %></div>', {
                  event: event,
                  record: record
                }));
              });

            //监听选中改变
            markerList.on('selectedChanged', function (event, info) {
              console.log(info)
            });

            //展示该数据
            markerList.render(_this.searchList);
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
