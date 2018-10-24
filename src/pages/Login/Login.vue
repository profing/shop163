<template>
  <div class="login">
    <PublicHeader/>

    <section class="cont">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="logo">
      </div>
      <div class="btns">
        <div class="btn">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </section>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>

<script>
import PublicHeader from '../../components/PublicHeader/PublicHeader'
export default {
  components:{
    PublicHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .login
    width 100%
    height 100%
    box-sizing border-box
    padding-top (88/$rem)
    background #f2f5f4
    position relative
    .cont
      >.logo
        text-align center
        padding (120/$rem) 0
        >img
          display inline-block
          width (300/$rem)
          height (104/$rem)
      >.btns
        padding 0 (42/$rem)
        >.btn
          margin-bottom (40/$rem)
          text-align center
          border-radius (6/$rem)
          width 100%
          height (86/$rem)
          line-height (86/$rem)
          vertical-align middle
          text-align center
          font-size (28/$rem)
          color #b4282d
          border 1px solid #b4282d
          // background-color #b4282d
          &.dist
            background-color #b4282d
            color #fff
          .iconfont
            
            width (40/$rem)
            height (40/$rem)
            box-sizing border-box
            font-size (40/$rem)
            vertical-align inherit
            margin-right (6/$rem)
      >.quickLoign
        color #333333
        font-size (28/$rem)
        width 100%
        text-align center
        >i 
          font-size (28/$rem)
          margin-right (16/$rem)
          margin-left (4/$rem)
          color #333333
    .otherLogin
      position absolute
      width 100%
      height (60/$rem)
      left 0
      bottom (60/$rem)
      text-align center
      .itemOther
        height (26/$rem)
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 (60/$rem)
        font-size (30/$rem)
        >i 
          font-size (30/$rem)
        &:last-child
          border-right none
</style>


