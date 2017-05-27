<template>
  <div>
    <produc-list></produc-list>
    <cart></cart>
  </div>
</template>

<script type="text/ecmascript-6">
  import cart from '../components/Cart'
  import producList from '../components/Productlist'
  export default {
    components:{cart,producList}
  }

</script>
<style lang="scss">

</style>
