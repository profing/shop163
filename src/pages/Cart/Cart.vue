<template>
  <div class="shopCart">
    <header class="cartHeader">
      <h3 class="title">购物车</h3>
      <a class="lingquan" href="#">
        <span>领券</span>
      </a>
    </header>

    <ul class="explain">
      <li class="expItem">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png" alt="xiaoyuan"/>
        <span>30天无忧退货</span>
      </li>
      <li class="expItem">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png" alt="xiaoyuan"/>
        <span>48小时快速退款</span>
      </li>
      <li class="expItem">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png" alt="xiaoyuan"/>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="cart">
      <div class="img"></div>
      <div class="txt">
        <div class="inner">
          <div class="txtCon">去添加点什么吧</div>
          <router-link to='/login'>
            <div class="txtBtn">登录</div>
          </router-link>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  @import '../../assets/stylus/minxin'
  .shopCart
    position relative
    height 100%
    .cartHeader
      width 100%
      .title
        font-size 0.48rem
        height (88/$rem)
        line-height (88/$rem)
        text-align center
        background #ffffff
        color #333333
      .lingquan
        position absolute
        top .31rem
        right 0.95rem
        font-size 0.42rem
        color #B4282D
    >.explain
      z-index 1
      height (70/$rem)
      padding 0 (30/$rem)
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-between
      >.expItem
        display flex
        align-items center
        font-size (24/$rem)
        color #666666
        >i 
          display inline-block
          width (10/$rem)
          height (10/$rem)
          font-size (10/$rem)
          color #d9d9d9
          margin-right (8/$rem)
    .cart
      position absolute
      top (-50/$rem)
      right 0
      bottom 0
      left 0
      margin auto
      height (300/$rem)
      text-align center
      >.img 
        display inline-block
        vertical-align middle
        width (248/$rem)
        height (248/$rem)
        margin-bottom (8/$rem)
        background url('../../assets/images/cart.png')
        background-size cover
        background-position center center
        background-repeat no-repeat
      >.txt
        font-size (28/$rem)
        line-height 1
        color #7f7f7f
        >.inner
          margin-top (-20/$rem)
          >.txtCon
            margin-bottom (50/$rem)
            line-height 1
            font-size (28/$rem)
            color #999999
          .txtBtn
            margin auto
            width (480/$rem)
            height (92/$rem)
            font-size (30/$rem)
            line-height (92/$rem)
            color #ffffff
            background-color #b4282d;
            border-radius (4/$rem)
</style>


