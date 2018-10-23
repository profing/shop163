<template>
  <div class="footer_guide">
    <div class="guide_item" @click="goto('/home')" :class="{on:$route.path==='/home'}"> 
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/topic')" :class="{on:$route.path==='/topic'}"> 
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </div>  
    <div class="guide_item" @click="goto('/item')" :class="{on:$route.path==='/item'}"> 
      <span class="item_icon">
        <i class="iconfont icon-navicon-kcfl"></i>
      </span>
      <span>分类</span>
    </div> 
    <div class="guide_item" @click="goto('/cart')" :class="{on:$route.path==='/cart'}"> 
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </div> 
    <div class="guide_item" @click="goto('/login')"> 
      <span class="item_icon">
        <i class="iconfont icon-mine"></i>
      </span>
      <span>个人</span>
    </div> 
  </div>
</template>

<script>
export default {

  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/minxin'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    bottom 0
    width 100%
    height (98/$rem)
    background-color #ffffff
    display flex
    .guide_item
      display flex
      flex-direction column
      flex 1
      text-align center
      align-items center
      color #666666
      margin (5/$rem)
      z-index 100
      &.on
        color #b4282d
      span
        font-size (14/$rem)
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size (40/$rem)
</style>

