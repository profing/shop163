<template>
<div class="topic-wrapper">
    <!-- 头部 -->
  <PublicHeader/>
  <div class="Bs_wrapper">
    <section class="eneralThings">
      <!-- 轮播 -->
      <TopicNav/>
      <div class="ItemList">
        <ul>
          <li v-for="(item,index) in topicData.column" :key="index">
            <a>
              <div class="img-warp">
                <img :src="item.picUrl">
              </div>
              <div class="article-count">
                <span>{{item.articleCount}}</span>
              </div>
              <div class="item-name">
                <span>{{item.title}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 为你推荐-->
      <div class="recommend">
        <div class="title">为你推荐</div>
        <Recommend :recommendData="topicData.recommendOne"/>
        <RecomItem :ItemData="topicData.recommendTwo"/>
        <RecomItem :ItemData="topicData.recommendThree"/>
        <Recommend :recommendData="topicData.recommendOne"/>
        <RecomItem :ItemData="topicData.recommendTwo"/>
        <RecomItem :ItemData="topicData.recommendThree"/>
      </div>
      <!-- 十点一刻 -->
      <div class="tenFifteen">
        <div class="inner">
          <div class="title">十点一刻</div>
          <div id="tenFifteenBS">
            <div class="list" v-if="topicData.tenfifteen">
              <a class="main" href="javascript:;" v-for="(item,index) in topicData.tenfifteen" :key="index">
                <div class="line-title">
                  <span>今日话题</span>
                </div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="joinInfo">
                  <div class="joininner">
                    <div class="avatars" v-if="item.participantAvatar">
                      <div class="avatar" v-for="(avatar,index) in item.participantAvatar" :key="index" v-if="avatar">
                        <img :src="avatar" alt="">
                      </div>
                    </div>
                    <div class="joincount">
                      {{item.participantNum}}人参与话题
                    </div>
                  </div>
                </div>
              </a>
              <a class="more" href="javascript:;">
                <div class="inner">
                  <div class="text">查看全部话题</div>
                  <i class="right-icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 严选臻品 -->
      <div class="zhenxuan">
        <div class="title">严选臻品</div>
        <Recommend :recommendData="topicData.zhenOne"/>
        <RecomItem :ItemData="topicData.zhenTwo"/>
        <RecomItem :ItemData="topicData.zhenThree"/>
      </div>
      <!-- 严选look -->
      <div class="exploreLook">
        <div class="title">严选LOOK</div>
        <div class="imgWarp">
          <img src="//yanxuan.nosdn.127.net/ce03b9c9d8636b04564a6e36d5be0781.jpg?imageView&quality=75" alt="">
        </div>
        <div class="topicInfo">
          <div class="author">
            <div class="avatr">
              <img src="//yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png?imageView&quality=75&thumbnail=48y48" alt="">
            </div>
            <div class="nickname">s****u</div>
          </div>
          <div class="desc">
            加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～
          </div>
        </div>
      </div>
      <!-- 更多精彩 -->
      <div class="moreSurprises">
        <div class="lineTitle">
          <div>
            更多精彩
          </div>
        </div>
        <TopicSuprise v-if="moreSurprise" v-for="(surpise,index) in moreSurprise" :key = 'index' :surpise = 'surpise'/>
      </div>
    </section>
    <i class="gotoTop" @click = 'gotoTop' v-show="isShowGotoTop"></i>
  </div>

</div>
</template>

<script>
import {mapState} from 'vuex'

import PublicHeader from '../../components/PublicHeader/PublicHeader'
import TopicNav from '../../components/TopicNav/TopicNav'
import Recommend from '../../components/Recommend/Recommend'
import RecomItem from '../../components/RecomItem/RecomItem'
import TopicSuprise from '../../components/TopicSuprise/TopicSuprise'
import BScorll from 'better-scroll'
export default {
  // 设计状态，加载更多内容
  data(){
    return{
      isAtBottom:false,//是否到达底部
      showSurprise: 4,//每次显示个数
      isOverLoad:false,
      isShowGotoTop:false
    }
  },
  computed:{
    ...mapState(['topicData']),
    // 每次加载四个
    moreSurprise(){
      // 如果不存在 直接返回
      if (this.topicData.findMore) {
        if(this.isAtBottom && this.isOverLoad && this.showSurprise<=this.topicData.findMore.length){
          // console.log(11111)
          this.isAtBottom = false;
          this.showSurprise += 4;
        }
        return this.topicData.findMore.slice(0,this.showSurprise)
      };
      
      
    }
  },
  mounted() {
    this.$store.dispatch("getTopicData",()=>{
      this.$nextTick(()=>{
          this._initScroll()
        })
    })
 
  },
  methods:{
    gotoTop(){
      this.TopicScoll.scrollTo(0,0,1000)
    },
    // 初始化滚动
    _initScroll(){
      this.TopicScoll = new BScorll('.Bs_wrapper',{
        click: true,
        scrollY:true,
        probeType: 1,
      });
      new BScorll('.ItemList', {
        click: true,
        scrollX: true
      });
      new BScorll('#tenFifteenBS', {
        click: true,
        scrollX: true
      }); 
      // 
      this.TopicScoll.on('scroll',({y}) =>{
        this.isShowGotoTop = Math.abs(y) >500 ? true : false;
        y < this.TopicScoll.maxScrollY ? this.isAtBottom = true : this.isAtBottom = false
      });
      this.TopicScoll.on('scrollEnd',({y}) =>{
        this.isShowGotoTop = Math.abs(y) >500 ? true : false;
        y < this.TopicScoll.maxScrollY ? this.isAtBottom = true : this.isAtBottom = false
      });
    }
  },
  watch:{
    moreSurprise(value){
      this.$nextTick(()=>{
        this.isOverLoad = true;
        this.TopicScoll.refresh()
      })
    }
  },
  components:{
    PublicHeader,
    TopicNav,
    Recommend,
    RecomItem,
    TopicSuprise
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  // html,body
  //   overflow hidden
  .topic-wrapper
    height 100%
    width 100%
    overflow hidden
    .Bs_wrapper
      height 100%
      .eneralThings
        background #e3e2e3
        // overflow hidden
        .ItemList
          background #fff
          width 100%
          height (286/$rem)
          margin-bottom  0.3rem 
          overflow hidden
          display flex
          ul
            display flex
            justify-content center
            align-items center
            padding (32/$rem) (30/$rem) (28/$rem) (30/$rem)
            margin-bottom (20/$rem)
            background-color: #fff;
            li
              width (164/$rem)
              height (210/$rem)
              margin-right (24/$rem)
              float: left;
              position: relative
              overflow: hidden
              a
                height 100%
                width 100%
                .img-warp
                  width (164/$rem)
                  height (164/$rem)
                  margin-bottom (22/$rem)
                  img
                    width 100%
                    height 100%
                .article-count
                  position absolute
                  top 0
                  left 0
                  width (200/$rem)
                  height (38/$rem)
                  span
                    display block
                    font-size (18/$rem)
                    background #e3e3e3
                    color #fff            
                .item-name
                  width (190/$rem)
                  height (40/$rem)
                  text-align center
                  span  
                    display block
                    font-size (16/$rem)
                    color #333
        .recommend
          padding 0 (30/$rem) (40/$rem)
          margin-bottom (20/$rem)
          background #ffffff
          .title
            width (690/$rem)
            height (120/$rem)
            line-height (120/$rem)
            font-size (32/$rem)
            text-align center
        .tenFifteen
          overflow: hidden;
          padding: 0 .4rem .53333rem;
          height: 7.61333rem;
          background-color: #fff;
          margin-bottom: .26667rem
          .inner
            >.title
              background-color: #fff;
              text-align: center;
              font-size: .42667rem;
              height: 1.6rem;
              line-height: 1.6rem
            #tenFifteenBS
              display flex
              .list
                flex 1
                display flex
                a
                  position: relative;
                  width: 7.73333rem;
                  height: 5.48rem;
                  padding: .50667rem .53333rem 1.05333rem;
                  margin-right: .4rem;
                  text-align: center;
                  color: #333
                  box-sizing border-box
                  display: inline-block;
                  vertical-align: middle;
                  &.main
                    position relative
                    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
                    background-repeat: no-repeat;
                    background-size: 100% 100%
                    >.line-title
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin-bottom: .53333rem
                      &::before,&::after
                        content: ' ';
                        display: block;
                        width: .32rem;
                        height: 1px;
                        background-color: #7f7f7f
                      span
                        margin: 0 .10667rem;
                        font-size: .30rem;
                        color: #7f7f7f

                    >.title
                      font-size: .48rem;
                      font-weight: 700;
                      margin-bottom: .18667rem
                    >.desc
                      font-size: .37333rem;
                      line-height: 1.5;
                      display: block;
                      text-align center
                      overflow: hidden;
                      text-overflow: ellipsis

                    >.joinInfo
                      position: absolute;
                      bottom: 1.05333rem;
                      width: 6.66667rem;
                      text-align: center
                      >.joininner
                        display: inline-block;
                        overflow: hidden
                        >.avatars
                          float: left;
                          margin-right: .21333rem
                          >.avatar
                            position: relative;
                            float: left;
                            height: .64rem;
                            width: .64rem;
                            overflow: hidden;
                            border: 1px solid #fff;
                            border-radius: 50%
                        >.joincount
                          float: left;
                          text-align: left;
                          line-height: .64rem;
                          font-size: .32rem;
                          color: #7f7f7f
                  &.more
                    position: relative;
                    height: 5.12rem;
                    border: (10/$rem) solid #e6e6e6;
                    padding: 0;
                    margin-right: 0;
                    background-color: #fafafa
                    >.inner
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      margin: auto;
                      width: 3.2rem;
                      height: .50667rem;
                      display: flex;
                      align-items: center
                      >.text
                        color: #7f7f7f;
                        font-size: .42667rem;
                        line-height: .50667rem;
                        margin-right: .22667rem
                      >.right-icon
                        display: inline-block;
                        vertical-align: middle;
                        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png);
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        width: .4rem;
                        height: .4rem
        .zhenxuan
          padding 0 (30/$rem) (40/$rem)
          margin-bottom (20/$rem)
          background #ffffff
          .title
            width (690/$rem)
            height (120/$rem)
            line-height (120/$rem)
            font-size (32/$rem)
            text-align center  
        .exploreLook
          background #fff
          position: relative;
          display: block;
          color: #333
          .title
            width (690/$rem)
            height (120/$rem)
            line-height (120/$rem)
            font-size (32/$rem)
            text-align center 
          >.imgWarp
            width 100%
            position relative
            >img
              width 100%
              height (386/$rem)
              display block
              margin 0 auto
          >.topicInfo
            overflow: hidden;
            position: relative;
            padding: .32rem .4rem .61333rem;
            background-color: #fff
            >.author
              height: 0.64rem;
              font-size: 0.32rem
              margin-bottom: .32rem
              display flex
              line-height 100%
              >.nickname
                padding-top 10px

            >.desc
              font-size: .37333rem;
              line-height: 1.6;
              color: #7f7f7f
        .moreSurprises
          margin: 0 .4rem .4rem
          
          .lineTitle
            height: 1.86667rem;
            display: flex;
            background #e3e3e2
            align-items: center;
            justify-content center
            &::before,&::after
              content: ' ';
              display: block;
              width: 3.52rem;
              height: 1px;
              background-color: #d9d9d9
            >div
              background #fff
              margin: 0 .32rem;
              font-size: .30333rem;
              color: #333   

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


