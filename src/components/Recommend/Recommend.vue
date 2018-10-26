<template>
  <a class="mainPosItem" href="javascript:;" v-if="recommendData">
    <div class="imgContiner" :style="{backgroundImage:`url(${recommendData.picUrl})`}">
      <div class="topicTag">
        <div class="tag">{{recommendData.typeName}}</div>
      </div>
    </div>
    <div class="topicInfo">
      <div class="line1">
        <div class="desc">{{recommendData.title}}</div>
        <div class="price">{{recommendData.priceInfo}}元起</div>
      </div>
      <div class="line2">
       {{recommendData.subTitle}}
      </div>
    </div>
  </a>
</template>

<script>
export default {
    props:{
      recommendData:Object
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .mainPosItem
    display: block;
    position: relative;
    color: #333;
    border: 1px solid #d9d9d9;
    border-radius: .10667rem;
    overflow: hidden;
    margin-bottom: .4rem
    margin-top .4rem
    .imgContiner
      position: relative;
      height: 5.14667rem;
      border-radius: .10667rem .10667rem 0 0;
      overflow: hidden
      background-image: url(//yanxuan.nosdn.127.net/201eb7ad6eeb93fd9468f3f9f2deb8d4.jpg?imageView&quality=75);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat
    .topicTag
      position: absolute;
      top: -.33333rem;
      left: .26667rem;
      .tag
        display: inline-block;
        padding: 0 .21333rem;
        height: .48rem;
        line-height: .48rem;
        background-color: rgba(255,255,255,.9);
        border: 1px solid #d9d9d9;
        border-radius: .26667rem;
        color: #333;
        font-size: (30/$rem)
    .topicInfo
      overflow: hidden;
      position: relative;
      padding: .32rem .26667rem ;
      background-color: #fff
      .line1
        margin-bottom: .25333rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.2
        .desc
          flex: 1;
          margin-right: .4rem;
          font-size: .48rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden
        .price
          line-height: 1;
          font-size: .48rem;
          text-align: center;
          min-width: 1.53333rem;
      .line2
        position: relative;
        font-size: .37333rem;
        line-height: 1.2;
        color: #7f7f7f;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden
</style>

