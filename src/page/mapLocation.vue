<template>
  <div>
    <div id="container"></div>
    <div id="tip">

      <span id="result">

      </span>
      <button class="demo11">点击事件</button>
    </div>


  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {}
    },
    mounted(){
      this.geocoder()

    },
    methods: {
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
        let _this = this
        var resultStr = "";
        //地理编码结果数组
        var geocode = data.geocodes;
        for (var i = 0; i < geocode.length; i++) {
          //拼接输出html
          resultStr += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" + "<b>地址</b>：" + geocode[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" + geocode[i].location.getLng() + ", " + geocode[i].location.getLat() + "" + "<b>&nbsp;&nbsp;&nbsp;&nbsp;匹配级别</b>：" + geocode[i].level + "</span>";
        }
      },
    }
  }

</script>
<style lang="scss">
  .demo11 {
    z-index: 9999;
  }

</style>
