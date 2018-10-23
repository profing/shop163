<template>
  <div class="Interlayer">
    <div>
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
    </div>
    <div class="go">
      <img src="//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg">
      <router-link to="/download">
        <span class="downloadBtn"></span>
      </router-link>
      <router-link to="/home">
        <span class="backWapBtn"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  img 
    width 100%
    display block
  .Interlayer
    width 100%
    height 100%
    background-color #e3e3e2
    .go
      position relative
      .downloadBtn
        position absolute
        top 46px
        left 76px
        width 220px
        height 50px
      .backWapBtn
        position absolute
        top 112px
        left 84px
        height 20px
        width 180px
</style>


