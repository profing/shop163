<template>
    <header class="login_header">
      <div class="row">
        <div class="home" @click="$router.push('/home')">
          <i class="iconfont icon-shouye2"></i>
        </div>
        <div class="logo"></div>
        <div class="right">
          <div class="search">
            <a href="javascript:;">
              <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"></img>
            </a>
          </div>
          <div class="cart">
            <router-link to="/cart">
              <i class="iconfont icon-gouwuchekong"></i>
            </router-link>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .login_header
    height (88/$rem)
    position fixed
    left 0
    top 0
    right 0
    z-index 5
    background #fafafa
    &:after
      content ''
      position absolute
      left 0
      bottom 0
      width 100%
      height 1px
      background-color #d9d9d9
      transform scaleY(0.5)
    .row
      box-sizing border-box
      width (750/$rem)
      height (88/$rem)
      padding-left (24/$rem)
      padding-right (16/$rem)
      overflow hidden
      display flex
      align-items center
      justify-content space-between
      position relative
      >.home
        width (48/$rem)
        height (44/$rem)
        display inline-block
        vertical-align middle
        i 
          font-size (50/$rem)
          color #000
          height (44/$rem)
          line-height (44/$rem)
          position absolute
          top 0.29rem
          left 0.3rem
      .logo
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        width (172/$rem)
        height (54/$rem)
        display inline-block
        vertical-align middle
        background url('../../assets/images/icons.png')
        background-repeat no-repeat
        background-size (172/$rem) (398/$rem)
        background-position: 0px -62px;
      .right
        box-sizing border-box
        text-align center
        a
          display inline-block
          width (64/$rem)
          height (64/$rem)
        .search
          margin-right (20/$rem)
          float left            
          img 
            width (48/$rem)
            height (48/$rem)
            margin-top 7px
            display block       
        .cart
          float left
          margin-right (20/$rem)
          i 
            font-size (54/$rem)
            color #bbb
            width (64/$rem)
            height (64/$rem)
            display block    
</style>
