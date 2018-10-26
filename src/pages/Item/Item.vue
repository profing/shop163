<template>
  <div>
    <section class="list">
      <header class="search">
        <div class="inner">
          <div class="ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共9723款好物</span>
          </div>
        </div>
      </header>
      <!-- 左侧导航列表 -->
      <section class="main">
        <div class="listMenu">
          <div class="list_nav">
            <ul>
              <li class="item" :class="{active:isActive === index}" v-if="navData.length"
                v-for="(category,index) in navData"
               :key="index"
               @click = 'switchCategory(index,category)'>
                <a href="javascript:;">{{category.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 右侧内容区 -->
      <section class="list_Right">
        <!-- 头部 -->
        <div class="header_img">
          <a href="javascript:;"></a>
        </div>
        <!-- 内容列表-->
        <div class="cateList" v-if="navData.length">
          <SpecialItem v-if="!showcategory.level" :showcategory = 'showcategory'/>
          <CategoryItem v-else :showcategory = 'showcategory'/>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import CategoryItem from '../../components/CategoryItem/CategoryItem.vue'
  import SpecialItem from '../../components/SpecialItem/SpecialItem.vue'
export default {
    data() {
      return {
        isActive:0,
        showcategory:{}
      }
    },
    computed:{
      ...mapState(['navData'])
    },  
    methods:{
      switchCategory(index,category){
        this.isActive = index;
        this.showcategory = category;
      },
    },
    mounted(){
      this.$store.dispatch('getNavData',()=>{
        this.$nextTick(()=>{
          
          new BScroll('.list_nav',{click: true,scrollY:true,probeType: 1});
          this.showcategory = this.navData[0]
        })
      })
    },
    components:{
      CategoryItem,
      SpecialItem 
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .list
    margin-bottom (98/$rem)
    height 100%
    background #ffffff
    width 100%
    overflow hidden
    .search
      position fixed
      top 0
      left 0
      z-index 1
      width 100%
      height (88/$rem)
      .inner
        display flex
        align-items center
        padding 0 (30/$rem)
        width 100%
        height (88/$rem)
        position relative
        background-color #ffffff
        &:after
          content ''
          position: absolute
          background-color #d9d9d9
          left 0
          width 100%
          height 1px
          transform-origin 50% 100% 0
          bottom 0
        .ipt
          width (690/$rem)
          display flex
          align-items center
          justify-content center
          height (56/$rem)
          font-size (41/$rem)
          background-color #ededed
          border-radius (8/$rem)
          >.icon
            display inline-block
            vertical-align middle
            width (28/$rem)
            height (28/$rem)
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat no-repeat
            background-size (28/$rem)
            margin-right (10/$rem)
          >.placeholder
            font-size (27/$rem)
            color #666666
    .main
      margin-top (88/$rem)
      .listMenu
        position fixed
        top (88/$rem)
        left 0
        bottom 0
        z-index 4
        width (162/$rem)
        background-color #ffffff
        &:after
          content ''
          position absolute
          background-color rgba(0,0,0,.15)
          top 0
          bottom 0
          width 1px
          -webkit-transform-origin 100% 50% 0
          transform-origin 100% 50% 0
          right 0
      .list_nav
        width 100%
        max-height (1140/$rem)
        padding-top (40/$rem)
        overflow hidden
        >ul
          padding-bottom (138/$rem)
          >.item
            width 100%
            height (76/$rem)
            line-height (76/$rem)
            text-align center
            border none
              >a
                font-size (36/$rem)
                line-height (76/$rem)
                font-weight 700
                color $on
            &.active
              position relative
              &:before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width (6/$rem)
                background-color #ab2b2b
              >a
                font-size (36/$rem)
                line-height (76/$rem)
                font-weight 700
                color #ab2b2b
            +.item
              margin-top (20/$rem)
            >a
              display block
              color #333333
              font-size (28/$rem)
              line-height (56/$rem)
              ellipsis()


    .list_Right
      float right
      width (528/$rem)
      height 100%
      padding (30/$rem) (30/$rem) (21/$rem) (30/$rem)
      background #fff
      .header_img
        width (528/$rem)
        height (192/$rem)
        background-image:url(http://yanxuan.nosdn.127.net/0ec3c89f9ecd8df2d2469a587078be7a.jpg?imageView&thumbnail=0x196&quality=75);
        background-size cover
        border-radius (4/$rem)
        margin-bottom (32/$rem)


</style>


