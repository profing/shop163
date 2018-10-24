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
      <!-- 轮播 -->
      <div class="home_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in homeData.focusList" :key="item.id">
                <img :src="item.picUrl">
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="nav_service">
          <div class="service_item">
            <img class="u-icon u-icon-servicePolicy-index" src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png"></img>
            <span class="text">网易自营品牌</span>
          </div>
          <div class="service_item">
            <img class="u-icon u-icon-servicePolicy-index" src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png"></img>          
            <span class="text">30天优退货</span>
          </div>
          <div class="service_item">
            <img class="u-icon u-icon-servicePolicy-index" src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png"></img>          
            <span class="text">48小时快速退款</span>
          </div>          
        </div>
      </div>
      <!-- 品牌直供 -->
      <div class="m-indexFloor">
        <div class="hd">
          <div class="hd-Wrap">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <ul class="hd-itemWrap">
          <li class="hd-item">
            <h4 class="ellipsis">CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </li>
          <li class="hd-item">
            <h4 class="ellipsis">Nine West制造商</h4>
            <div class="title">
              199元起
            </div>
          </li>
          <li class="hd-item">
            <h4 class="ellipsis">新秀丽制造商</h4>
            <div class="title">
              49元起
            </div>
          </li>
          <li class="hd-item">
            <h4 class="ellipsis">Birkenstock集团制造商</h4>
            <div class="title">
              89.9元起
            </div>
          </li>
        </ul>
      </div>
    </section>

    <HomeFooter/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HomeFooter from '../../components/HomeFooter/HomeFooter'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
    components:{
      HomeFooter
    },
    computed:{
      ...mapState(['homeData']),
    },
    mounted() {
      this.$store.dispatch("getHomeData")

    },
    watch:{
      // 注意: 状态数据变化后, 更新对应的界面是异步进行的
      homeData (value) { // categorys状态数据更新了立即
        // 必须在状态数据更新之后执行
        this.$nextTick(() => { // 回调函数在界面更新之后立即执行
          // 初始化列表显示之后执行
          new Swiper('.swiper-container', {
            loop: true, // 循环模式
            autoplay: {
              autoplay:true,
              delay: 3000
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .home
    width 100%
    height 100%    
    position relative
    .home_header
      position fixed
      top 0px
      left 0px
      width 100%
      height (148/$rem)
      background-color #fff
      z-index 10
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
      position absolute
      width 100%
      top (148/$rem)
      .home_nav
        width 100%
        height (442/$rem)
        .swiper-container
          width 100%
          height (370/$rem)
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
            img 
              width 100%
              height 100%
        .nav_service
          height (72/$rem)
          width 100%
          display flex
          .service_item
            flex 1
            display flex
            text-align center
            align-items center
            .u-icon
              display block
              width (30/$rem)
              height (30/$rem)
              margin-left 10px
            .text
              font-size (24/$rem)
          // width 100%
        
      .m-indexFloor 
        width 100%
        height (586/$rem)
        margin-top 0.2rem
        margin-bottom .2rem
        background-color #ffffff
        .hd
          width 100%
          height (110/$rem)
          background-color #fff
          .hd-Wrap
            text-align center
            span 
              width (112/$rem)
              height (54/$rem)
              font-size (34/$rem)
              .icon-jiantouyou
                font-size (30/$rem)
        .hd-itemWrap
          width 100%
          // overflow hidden
          // display flex
          .hd-item
            width (355/$rem)
            height (236/$rem)
            // margin-bottom: (30/$rem)
            // overflow hidden
            // background-color #f4f4f4
            // padding 18px
            float left
            border 1px solid #999;
            &:nth-child(1),&:nth-child(3)
              // margin-left 8px           
            &:nth-child(1)
              background url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png");
              background-size: 100%           
            &:nth-child(2)
              background url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png");
              background-size 100%            
            &:nth-child(3)
              background url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png");
              background-size: 100%            
            &:nth-child(4)
              background url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png");
              background-size 100%            
            .title
              font-size (30/$rem)
            h4
              color #333
              font-size (30/$rem)
              line-height (30/$rem)
              margin-bottom (30/$rem)
   

</style>


