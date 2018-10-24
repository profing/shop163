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
      <section class="main">
        <div class="listMenu">
          <div class="inner">
            <ul>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item">
                <a href="javascript:;">推荐专区</a>
              </li>
            </ul>
          </div>
        </div>

      </section>
      <section class="list_Right">
        <div class="header_img">
          <a href="javascript:;"></a>
        </div>
        <ul class="list_Right_list">
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/c3a2ae5f17b277bfc296f175aa474dca.png?imageView&quality=85&thumbnail=144x144" alt="">
            <p>服装每满199减20</p>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .list
    margin-bottom (98/$rem)
    height 100%
    background #ffffff
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
      .inner
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
                width: 6px
                background-color $on
              >a
                font-size (36/$rem)
                line-height (76/$rem)
                font-weight 700
                color $on
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
      .list_Right_list
        width (588/$rem)
        height (824/$rem)
        box-sizing border-box
        li
          width (144/$rem)
          height (216/$rem)
          float left
          padding-right (34/$rem)
          img
            width (144/$rem)
            height (144/$rem)
          p 
            font-size (30/$rem)
            width (144/$rem)
            height (72/$rem)
            color #333333
            text-align center

</style>


