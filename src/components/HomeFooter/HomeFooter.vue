<template>
  <div class="m-ftWrap" >
    <div class="m-ft" >
      <div class="bd">
        <a href="#" class="goApp" >下载APP</a>
        <a href="#" class="goWeb">电脑版</a>
      </div>
      <p class="copyright">
        <span>网易公司版权所有 © 1997-</span>
        <span>2018</span>
        <br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .m-ftWrap
    overflow hidden
    margin-bottom (98/$rem)
    width 100%
    height (245/$rem)
    background-color #414141  
    .m-ft
      clearFix()
      width 90%
      height (245/$rem)
      margin (50/$rem) auto 0
      .bd
        text-align center
        .goApp
          border 1px solid #999
          display inline-block
          vertical-align middle
          border-radius 4px
          overflow hidden
          width (172/$rem)
          font-size: 0.36rem
          color #fff
          height (62/$rem)
          line-height (62/$rem)           
        .goWeb    
          border 1px solid #999
          display inline-block
          vertical-align middle
          border-radius 4px
          overflow hidden
          width (172/$rem)
          font-size: 0.36rem
          color #fff         
          height (62/$rem)
          line-height (62/$rem)           
      .copyright
        margin-top .4rem
        font-size .4rem
        text-align center
        color #999
        span
          font-size .2rem
          line-height 0.1rem
          color #999
          text-align center

    
</style>

