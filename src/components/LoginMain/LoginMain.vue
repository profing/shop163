<template>
  <div class="loginTypesWrap" v-show="isShow">
    <div class="typesWarp">
      <div class="logoWarp">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="btnWarp">
        <div class="loginPhone-button redBtn" @click="switchPage('phone')">
          <i class="icon-loginPhone"></i>
          <span>手机号码登录</span>
        </div>
        <div class="loginMail-button writeBtn" @click="switchPage('mail')">
          <i class="icon-loginMail" data-reactid=".0.1.0.1.1.1.0"></i>
          <span>邮箱帐号登录</span>
        </div>
        <div class="register-button" @click="switchPage('mail')">
          <span>手机号快捷注册</span>
          <i class="icon-arrow-right"></i>
        </div>
      </div>
      <div class="partnerWarp">
        <div class="itemWarp">
          <span class="item">
            <i class="iconfont icon-weixin"></i>
            <span class="name">微信</span>
          </span>
        </div>
        <div class="itemWarp middleWarp">
          <span class="item">
            <i class="iconfont icon-qq"></i>
            <span class="name">QQ</span>
          </span>
        </div>
        <div class="itemWarp">
          <span class="item">
            <i class="iconfont icon-weibo"></i>
            <span class="name">微博</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      isShow:Boolean,
    // switchPage:Function
  },
  methods:{
    switchPage(page){
      console.log(1111)
      this.$emit('switchPage', page);
      // this.isShow = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/minxin'
.login
  height 100%
  width 100%
  overflow hidden
  .redBtn
    text-align: center;
    font-size: .37333rem;
    border (1/$rem) solid #b4282d;
    background-color: #b4282d;
    overflow: hidden
    height: 1.25333rem;
    line-height: 1.25333rem
    width: 100%
    border-radius: 2px
    margin-bottom: .42667rem
  .writeBtn
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    border (1/$rem) solid #b4282d
    overflow: hidden
    color: #b4282d;
    background-color: transparent
    height: 1.25333rem;
    line-height: 1.25333rem
    display: block;
    width: 100%
    border-radius: 2px
    margin-bottom: .42667rem
  .loginContiner
    width 100%
    height 100%
    margin-top 1.16rem
    background-color #fff
    >.loginTypesWrap
      position: relative;
      height: 100%;
      background: #F2F5F4
      >.typesWarp
        >.logoWarp
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem
          >img
            display inline-block 
            width: 3.57333rem;
            height: 1.2rem
        >.btnWarp
          padding: 0 .53333rem;
          margin-bottom: 2.73333rem
          >.loginPhone-button
            color: #fff;
            >.icon-loginPhone
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
              background-repeat: no-repeat;
              background-size: .53333rem 3.86667rem;
              background-position: 0 -.66667rem
              width: .53333rem;
              height: .53333rem
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem
          >.loginMail-button
            >.icon-loginMail
              display: inline-block;
              vertical-align: middle;
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
              background-repeat: no-repeat;
              background-size: .53333rem 3.86667rem;
              width: .53333rem;
              height: .53333rem
              background-position: 0 0;
          >.register-button
            color: #333;
            font-size: .37333rem;
            text-align: center;
            width: 100%
            >.icon-arrow-right
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem
              margin-left: .05333rem;

        >.partnerWarp
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 2.16667rem;
          height: .53333rem;
          display flex
          align-items center
          justify-content center
          >.itemWarp
            height: .53333rem;
            text-align: center;
            padding: 0 .53333rem
            flex 1
            &.middleWarp
              border-right (1/$rem) solid #979797;
              border-left (1/$rem) solid #979797;
            >.item
              height: .53333rem;
              position: relative;
              top: -.13333rem
              display: flex;
              align-items center
              justify-content center
              line-height: .53333rem;
              font-size: .37333rem;
              >.name
                position: relative;
                top: .13333rem;
                height: .53333rem;
                color: #7F7F7F;
                margin-left: .06667rem
                display inline-block
              >.iconfont
                position: relative;
                top: .13333rem;
                width: .53333rem;
                height: .53333rem;
                font-size: .37333rem;

</style>
