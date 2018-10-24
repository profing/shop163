<template>
  <div class="home"> 
    <HomeHeader/>
    <section class="home_item">
      <!-- 首页轮播 -->
      <HomeNav/>
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
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import HomeNav from '../../components/HomeNav/HomeNav'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {

    components:{
      HomeFooter,
      HomeHeader,
      HomeNav
    },
    computed:{
      // ...mapState(['homeData']),
    },
    mounted() {
      this.$store.dispatch("getHomeData")

    },
    watch:{
 
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .home
    width 100%
    height 100%    
    position relative 
    .home_item
      position absolute
      width 100%
      top (148/$rem)

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
          .hd-item
            width (355/$rem)
            height (236/$rem)
            float left
            border 1px solid #999;
            &:nth-child(1),&:nth-child(3)          
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


