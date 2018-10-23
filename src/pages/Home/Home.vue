<template>
  <div class="home"> 
    <header class="home_header">
      <section class="header_search">
        <img class="header_logo" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="logo">
        <input class="search_input" type="text">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder">搜索商品,共16666款好物</span>
      </section>
      <ul class="header_list">
        <li class="list_item">
          <span>推荐</span>
        </li>
        <li class="list_item">
          <span>居家</span>
        </li>    
        <li class="list_item">
          <span>鞋包配饰</span>
        </li>    
        <li class="list_item">
          <span>居家</span>
        </li>    
        <li class="list_item">
          <span>鞋包配饰</span>
        </li> 
        <li class="list_item">
          <span>居家</span>
        </li>    
        <li class="list_item">
          <span>鞋包配饰</span>
        </li>                            
      </ul>
    </header>
    <section class="home_item">
      <div class="home_nav">
        <div class="swiper_container">
          <div class="swiper_wrapper">
            <div class="swiper_item">
              <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
             <div class="swiper_item">
              <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
             <div class="swiper_item">
              <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
             <div class="swiper_item">
              <img src="https://yanxuan.nosdn.127.net/c3f81941ae3a5f8455bd41f2f4d0b8af.png?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
          </div>
        </div>
        <div class="nav_service"></div>
      </div>
    </section>
    <footer class="home_footer">

    </footer>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted() {
     new Swiper('.swiper-container', {
        effect: "fade",
        loop: true,
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .home
    width 100%
    height 100%
    background-color #fff
    position relative
    .home_header
      position fixed
      top 0px
      left 0px
      width 100%
      height (148/$rem)
      // background-color red
      .header_search
        position relative
        display flex
        align-items center
        font-size (28/$rem)
        .header_logo
          width (138/$rem)
          height (40/$rem)
          margin-left 10px
        .search_input
          margin 8px
          width (532/$rem)
          height (56/$rem)
          font-size (26/$rem)
          background #e3e3e3
        .icon-sousuo
          position absolute
          left 3.5rem
          top 0.35rem
        .placeholder
          position absolute
          left (300/$rem)
          top (28/$rem)
      .header_list
        font-size (30/$rem)
        li
          float left
          height 20px
          padding 4px
    
    .home_item
      .home_nav
        position absolute
        top (148/$rem)
        width 100%
        height (442/$rem)
        background-color pink 
        .swiper_container
          width 100%
          height (370/$rem)
          background-color red
          .swiper_item
            width 100%
            height 100%
            img 
              width 100%
              height 100%
        .nav_service
          background-color blue
          height (72/$rem)
          // width 100%
    .home_footer
      position fixed
      bottom 50px
      left 0px
      width 100%
      height (245/$rem)
      background-color yellow 
</style>


