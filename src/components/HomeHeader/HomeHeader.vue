<template>
  <header class="home_header">
    <section class="header_search">
      <img class="header_logo" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="logo">
      <input class="search_input" type="text">
      <img class="search" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"></img>
      <span class="placeholder">搜索商品,共16666款好物</span>
    </section>
    <div class="nav_wrapper">
      <ul class="header_list">
        <li class="list_item"
         :class="{active:index===currentIndex}"
         @click='chooseIndex(index)'
         v-for="(title,index) in navlist" 
         :key="index">
          <span>{{title}}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import BScorll from 'better-scroll'
  export default {
    data () {
      return {
        navlist: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐饮', '婴童', '文体', '特色区'],
        currentIndex: 0
      }
    },
    mounted() {
      this.$nextTick(() =>{
        new BScorll ('.nav_wrapper', {
          scrollX: true,
          click: true
        })
      })
    },
    methods:{
      chooseIndex(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
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
      .search
        position absolute
        width 18px
        height 18px
        left 3.2rem
        top 0.3rem
      .placeholder
        position absolute
        left (300/$rem)
        top (28/$rem)
    .nav_wrapper
      width 100%
      overflow hidden
      display flex
      flex-direction row
      flex-flow nowrap
      .header_list
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        padding 0 (30/$rem)
        background #ffffff
        height (60/$rem)
        align-items center
        li
          width (150/$rem)
          height (60/$rem)
          display flex
          flex-direction row
          flex-wrap nowrap
          justify-content space-between
          &.active
            span 
              color #b4282d
              position relative
              &:after{
                content ''
                left 0
                bottom 0
                position absolute
                width 100%
                height (4/$rem)
                background-color #b4282d
              }
          span
            display inline-block
            letter-spacing (2/$rem)
            padding 0 (16/$rem)
            line-height (60/$rem)
            font-size (26/$rem)
            text-align center
            color #333333        
        // li
        //   float left
        //   height 20px
        //   padding 4px
</style>
