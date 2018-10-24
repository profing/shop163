<template>
  <div class="home"> 
    <HomeHeader/>
    <section class="home_item">
      <!-- 首页轮播 -->
      <HomeNav/>
      <!-- 品牌直供 -->
       <HomeIndex/>
      <!--新品首发  -->
      <div class="m-newItems">
        <header class="ItemWrap newItemsWrap">
          <span>新品首发</span>
          <div id="all">查看全部 ></div>
        </header>
        <div class="m-goodGrid newItemWrapper">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in homeData.newItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="title">
                新品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </div>
        </div>
      </div>
      <!--人气推荐  -->
      <div class="m-newItems">
        <header class="ItemWrap pupItemsWrap ">
          <span>人气推荐，好物精选</span>
          <div id="all">查看全部 ></div>
        </header>
        <div class="m-goodGrid pupItemWrapper">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in homeData.popularItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="title">
                限购
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 限时选购 -->
      <!-- <countdown :time="resetTime * 1000"  v-bind:auto-start="false" ref="countdown">
        <template slot-scope="props">
          <div class="countDown">
            <a href="javascript:;">
              <div class="itemLeft">
                <div class="title">严选限时购</div>
                <div class="countNum">
                  <span class="time">{{ props.hours }}</span>
                  <span class="colon">:</span>
                  <span class="time">{{ props.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="time">{{ props.seconds }}</span>
                </div>
                <div class="nextTitle">下一场 22:00  开始</div>
              </div>
              <div class="itemRight">
                <img src="../../assets/images/test2.png" alt="">
                <div class="price">
                  <span class="now">¥42</span>
                  <span class="old">¥49</span>
                </div>
              </div>
            </a>
          </div>
        </template>
      </countdown>      -->
      <!-- 电气好物 -->

      <HomeFooter/>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import HomeIndex from '../../components/HomeIndex/HomeIndex'
  import HomeNav from '../../components/HomeNav/HomeNav'
  import BScorll from 'better-scroll'
  import 'swiper/dist/css/swiper.css'
  export default {

    components:{
      HomeFooter,
      HomeHeader,
      HomeIndex,
      HomeNav
    },
    computed:{
      ...mapState(['homeData']),
    },
    mounted() {
      this.$store.dispatch("getHomeData")
        this.$nextTick(()=>{
          new BScorll('.newItemWrapper', {
            click: true,
            scrollX: true
          });
          new BScorll('.pupItemWrapper', {
            click: true,
            scrollX: true
          }); 
        })
    },
    watch:{
      homeDate(value){

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
    .home_item
      position absolute
      width 100%
      top (148/$rem)
      .m-newItems
        width 100%
        margin .4rem auto
        background-color #fff
        .ItemWrap
          // background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
          background-size 3rem 3.46667rem
          height (260/$rem)
          margin-top .15rem
          margin-bottom .2rem
          position relative
          &.newItemsWrap
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
          &.pupItemsWrap 
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
          span
            position absolute
            top 20%
            left 50%
            transform translateX(-50%)
            font-size .48rem
            color #8BA0B6         
          #all
            text-align center
            margin .21333rem auto 0
            width 3.2rem
            height .74667rem
            font-size (24/$rem)
            line-height .74667rem
            background #D8E5F1
            color #8BA0B6
            position absolute
            top 35%
            left 50%
            transform translateX(-50%)    
        .m-goodGrid
          padding-bottom .3rem
          margin-top .3rem
          height 6.4rem
          background-color #fff
          display flex
          overflow hidden
          .list
            display flex
            flex-flow row nowrap
            align-items center
            justify-content center
            .goodGrid-item
              margin-left .4rem
              width 3.73333rem
              .wraper
                width 3.73333rem
                background-color #f4f4f4
                img
                  width 100%
                  background-size 100% 100%
              .title
                z-index 1
                margin-top -.2rem
                margin-left .2em
                height .4rem
                overflow hidden
                background-color #f48f18
                padding .06667rem .21333rem
                line-height .26667rem
                text-align center
                color #fff
                font-size .26667rem
                border-radius .02667rem
                display inline-block
                vertical-align: middle
              .name
                margin-bottom (30/$rem)
                padding 0 (30/$rem)
                font-size (30/$rem)
                line-height (30/$rem)
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                color #333
                text-align left
              .newItemDesc
                display block
                margin-bottom .18667rem
                font-size .32rem
                color #7f7f7f
                line-height .4rem
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                padding 0 .13333rem     
              .price
                padding: 0 .13333rem
                font-size .37333rem
                text-align left
                color #b4282d
                line-height: 1
              

      // .m-indexFloor 
      //   width 100%
      //   height (586/$rem)
      //   margin-top 0.2rem
      //   margin-bottom .2rem
      //   background-color #ffffff
      //   .hd
      //     width 100%
      //     height (110/$rem)
      //     background-color #fff
      //     .hd-Wrap
      //       text-align center
      //       span 
      //         width (112/$rem)
      //         height (54/$rem)
      //         font-size (34/$rem)
      //         .icon-jiantouyou
      //           font-size (30/$rem)
      //   .hd-itemWrap
      //     width 100%
      //     .hd-item
      //       width (355/$rem)
      //       height (236/$rem)
      //       margin 0 0.1rem
      //       float left
      //       border 1px solid #999;
      //       &:nth-child(1),&:nth-child(3)          
      //       &:nth-child(1)
      //         background url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png");
      //         background-size: 100%           
      //       &:nth-child(2)
      //         background url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png");
      //         background-size 100%            
      //       &:nth-child(3)
      //         background url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png");
      //         background-size: 100%            
      //       &:nth-child(4)
      //         background url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png");
      //         background-size 100%            
      //       .title
      //         font-size (30/$rem)
      //         margin 0 0.3rem
      //       h4
      //         color #333
      //         font-size (30/$rem)
      //         padding 0.3rem
   

</style>


