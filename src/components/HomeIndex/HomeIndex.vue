<template>
  <div class="m-indexFloor">
    <div class="hd">
      <div class="hd-Wrap">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <ul class="hd-itemWrap">
      <li class="hd-item">
        <h4 class="ellipsis">CK制造商</h4>
        <div class="title">
          25元起
        </div>
      </li>
      <li class="hd-item">
        <h4 class="ellipsis">Nine West制造商</h4>
        <div class="title">
          199元起
        </div>
      </li>
      <li class="hd-item">
        <h4 class="ellipsis">新秀丽制造商</h4>
        <div class="title">
          49元起
        </div>
      </li>
      <li class="hd-item">
        <h4 class="ellipsis">Birken集团制造商</h4>
        <div class="title">
          89.9元起
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .m-indexFloor 
    width 100%
    height (586/$rem)
    margin-top 0.2rem
    margin-bottom .2rem
    background-color #ffffff
    .hd
      width 100%
      height (110/$rem)
      background-color #fff
      .hd-Wrap
        text-align center
        span 
          width (112/$rem)
          height (54/$rem)
          font-size (34/$rem)
          .icon-jiantouyou
            font-size (30/$rem)
    .hd-itemWrap
      width 100%
      .hd-item
        width (355/$rem)
        height (236/$rem)
        margin 0 0.1rem
        float left
        border 1px solid #999;
        &:nth-child(1),&:nth-child(3)          
        &:nth-child(1)
          background url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png");
          background-size: 100%           
        &:nth-child(2)
          background url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png");
          background-size 100%            
        &:nth-child(3)
          background url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png");
          background-size: 100%            
        &:nth-child(4)
          background url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png");
          background-size 100%            
        .title
          font-size (30/$rem)
          margin 0 0.3rem
        h4
          color #333
          font-size (30/$rem)
          padding 0.3rem
</style>