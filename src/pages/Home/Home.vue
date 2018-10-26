<template>
  <div class="home"> 
    <HomeHeader/>
    <div class="item_wrapper">
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
        <div class="limitTime" v-if="homeData.flashSaleIndexVO">
          <a>
            <div class="limitTime-warp">
              <div class="left-item">
                <div class="title">严选限时购</div>
                <div class="countdown">
                  <span class="hours time" >{{hour}}</span>
                  <span class="colon" >:</span>
                  <span class="mins time" >{{mins}}</span>
                  <span class="colon" >:</span>
                  <span class="secs time" >{{secs}}</span>
                </div>
                <div class="next-title">
                  <span>下一场</span>
                  <span >{{homeData.flashSaleIndexVO.nextStartTime | date-format("HH:mm")}}</span>
                  <span>开始</span>
                </div>
              </div>
              <div class="right-item">
                <div class="imgWarp">
                  <img :src="homeData.flashSaleIndexVO.primaryPicUrl" alt="">
                </div>
                <div class="price">
                  <div class="nowPrice">
                    <span class="rmb">￥</span>
                    <span>{{homeData.flashSaleIndexVO.activityPrice}}</span>
                  </div>
                  <div class="originPrice">
                    <span class="rmb">￥</span>
                    <span>{{homeData.flashSaleIndexVO.originPrice}}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- 福利 -->
        <div class="fuli">
          <a>
          </a>
        </div>
        <!-- 专题精选-->
        <div class="topicList">
          <header class="topic-title">
            <a>
              <span>专题精选</span>
              <i class="icon-right"></i>
            </a>
          </header>
          <div class="topic-items">
            <div class="topicScrollBox">
              <ul v-if="homeData.topicList">
                <li v-for="(topic,index) in homeData.topicList" :key="index">
                  <a href="javascript:;">
                    <img :src="topic.scenePicUrl">
                  </a>
                  <div class="item-price">
                    <h4>{{topic.title}}</h4>
                    <span>
                      {{topic.priceInfo}}元起
                    </span>
                  </div>
                  <div class="item-info">{{topic.subtitle}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 首页分类 -->
        <HomeCategorys  v-for="(cate,index) in homeData.cateList" v-if="homeData.cateList" :cateData="cate" :key="index"/>

        <!-- 首页底部 -->
        <HomeFooter/>
      </section>
      <!-- 返回头部 -->
      <i class="gotoTop" @click = 'gotoTop' v-show="isShowGotoTop"></i>
    </div>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import HomeIndex from '../../components/HomeIndex/HomeIndex'
  import HomeNav from '../../components/HomeNav/HomeNav'
  import HomeCategorys from '../../components/HomeCategorys/HomeCategorys'
  import BScorll from 'better-scroll'
  export default {
    data(){
      return{
        countdownTime:0,
        isShowGotoTop:false,
      }
    },
    components:{
      HomeFooter,
      HomeHeader,
      HomeIndex,
      HomeCategorys,
      HomeNav
    },
    computed:{
      ...mapState(['homeData']),
      hour(){
        const hour = Math.floor(this.countdownTime/(1000*60*60));
        return hour>10? hour : '0'+hour
      },
      mins(){
        const mins = Math.floor(this.countdownTime/(1000*60)%60)
        return mins>10? mins : '0'+mins
      },
      secs(){
        const secs = Math.floor(this.countdownTime/1000%60);
        return secs>10? secs : '0'+secs
      }
    },
    mounted() {
      const timer = setInterval(()=>{
        this.countdownTime -= 100
      },100);
      this.$store.dispatch("getHomeData",()=>{
        this.$nextTick(()=>{
          this.countdownTime = this.homeData.flashSaleIndexVO.remainTime;

          new BScorll('.newItemWrapper', {
            click: true,
            scrollX: true
          });
          new BScorll('.pupItemWrapper', {
            click: true,
            scrollX: true
          }); 
          new BScorll('.topicScrollBox', {
            click: true,
            scrollX: true
          }); 
          this.homeContinerBS = new BScorll('.item_wrapper',{
            click: true,
            scrollX:false,
            scrollY:true,
            probeType: 1,
          });
          this.homeContinerBS.on('scroll',({y}) =>{
            this.isShowGotoTop = Math.abs(y) >500 ? true : false;
            // console.log(this.homeContinerBS.maxScrollY,y)
          });
          this.homeContinerBS.on('scrollEnd',({y}) =>{
            this.isShowGotoTop = Math.abs(y) >500 ? true : false;
 
          });
        })
      })

    },
    methods:{
      gotoTop(){
        this.homeContinerBS.scrollTo(0,0,1000)
      }
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
    overflow hidden  
    position relative 
    .item_wrapper
      height 100%
      .home_item
        position absolute
        width 100%
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
                
        .limitTime
          .limitTime-warp
            padding: .4rem .53333rem .4rem .74667rem;
            margin-bottom: .26667rem;
            height: 5.06667rem;
            background: #fff;
            display: -moz-flex;
            display: flex;
            >.left-item
              flex 1
              display flex
              flex-direction: column;
              padding-top: 1.06667rem;
              >.title
                font-size: .48rem;
                line-height: .48rem;
                margin-bottom: .32rem;
                color: #333;
                letter-spacing: .16rem;
              >.countdown
                display inline
                overflow hidden
                >span
                  float left
                  vertical-align middle
                  line-height: .74667rem;
                  display: inline-block;
                  text-align: center;
                >.time
                  width: .82667rem;
                  height: .74667rem;
                  font-size: .42667rem;
                  color: #fff;
                  border-radius: .05333rem;
                  background: #444;
                >.colon
                  color: #333;
                  font-size: .4rem;
                  width: .26667rem;
                  font-weight: 700;
              >.next-title
                margin-top: .53333rem;
                color: #333;
                font-size: .32rem;
                line-height: .32rem;
                height: .32rem;
            >.right-item
              background: #fff;
              width: 4.26667rem;
              height: 4.26667rem;
              position: relative;
              >.imgWarp
                width 100%
                >img
                  width: 100%;
                  height: 100%;

              >.price
                height: 1.28rem;
                width: 1.28rem;
                position: absolute;
                right: .26667rem;
                bottom: .48rem;
                background-color: rgba(244,143,24,.95);
                border-radius: 100%;
                color: #fff;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                >div
                  font-size: .37333rem;
                  line-height: .37333rem;
                  height: .37333rem;
                  >.rmb
                    font-size .32rem
                    margin-right -5px

        .topicList
          width 100%
          font-size: .42667rem
          background-color #fff
          >.topic-title
            width 100%
            height: 1.46667rem
            display flex
            color: #333
            align-items center
            justify-content center
            .icon-right
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .4rem;
              height: .4rem;

          >.topic-items
            width 100%
            height (453/$rem)
            box-sizing border-box
            padding: 0 .4rem .48rem;
            overflow: hidden
            >.topicScrollBox
              width 100%
              height 100%
              display flex
              >ul
                display flex
                flex 1
                flex-shrink: 0
                >li
                  display flex
                  flex-flow: row nowrap
                  flex-direction column
                  margin-right: 20.8444px;
                  >a
                    display: block;
                    width: 7.66667rem;
                    height: 4.29333rem;
                    margin-bottom: .21333rem;
                    border-radius: 8px;
                    overflow: hidden
                    >img
                      display block
                      width 100%
                      height 100%
                  >.item-price
                    height: .54667rem;
                    margin-bottom: .02667rem;
                    zoom: 1;
                    >h4
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 5.46667rem;
                      float: left;
                      font-size: .37333rem;
                    >span
                      float: right;
                      font-size: .37333rem;
                      color: #b4282d;
                  >.item-info
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 7.66667rem;
                    font-size: .32rem;
                    color: #7F7F7F;

      .gotoTop
        position: absolute;
        right: .30667rem;
        bottom: 1.6rem;
        vertical-align: middle;
        width: 1.09333rem;
        height: 1.09333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
        background-size: 1.09333rem 1.09333rem;
        z-index: 2;     

</style>


