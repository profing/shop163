<template>

    <section class="eneralThings">
      <PublicHeader/>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="ItemList">
        <ul>
          <li>
            <a>
              <div class="img-warp">
                <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="item-name">
                <span>严选推荐</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div class="img-warp">
                <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="item-name">
                <span>严选推荐</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div class="img-warp">
                <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="item-name">
                <span>严选推荐</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div class="img-warp">
                <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="item-name">
                <span>严选推荐</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div class="img-warp">
                <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="item-name">
                <span>严选推荐</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div class="img-warp">
                <img src="http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="item-name">
                <span>严选推荐</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <div class="title">为你推荐</div>
        <div class="itemMajor">
          <a href="javascript:;">
            <img src="//yanxuan.nosdn.127.net/ebddd90057e76f11633cc124d468a436.jpg?imageView&quality=75">
            <span class="title_name">严选推荐</span>
            <div class="info">
              <div class="line1">
                <div class="Linetitle">严选新中式厨房</div>
                <div class="price">9.9元起</div>
              </div>
              <div class="line2">严选新中式厨房哈哈哈哈</div>
            </div>
          </a>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
                <img class="photo_img" src="//yanxuan.nosdn.127.net/cbf97b78af0639d4baa4caca09fd7f8a.jpg?" alt="">
                <span class="topicTitle">周边组:Michael</span>
            </div>
            <div class="line3">大英博物馆周边商品来了</div>
            <div class="line2">
              <div class="cont">每满99减100元</div>
            </div>
          </div>
          <div class="topicPic">
              <img src="//yanxuan.nosdn.127.net/120b13f858c9d3eebba8e2d898e91915.jpg?imageView&quality=75" alt="">
            <div class="topicTag">
              <div class="tag">挑款师推荐</div>
            </div>
          </div>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
                <img class="photo_img" src="//yanxuan.nosdn.127.net/cbf97b78af0639d4baa4caca09fd7f8a.jpg?" alt="">
                <span class="topicTitle">周边组:Michael</span>
            </div>
            <span class="line3">大英博物馆周边商品来了</span>
            <div class="line2">
              <div class="cont">每满99减100元</div>
            </div>
          </div>
          <div class="topicPic">
              <img src="//yanxuan.nosdn.127.net/120b13f858c9d3eebba8e2d898e91915.jpg?imageView&quality=75" alt="">
            <div class="topicTag">
              <div class="tag">挑款师推荐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
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


  .swiper-container
    width 100%
    height (433/$rem)
    margin-top (88/$rem)
    background #ffffff
    /*position absolute
    top 88px
    left 0*/
    .swiper-wrapper
      width: (690/$rem)
      height (385/$rem)
      padding (24/$rem) 0
      margin 0 (30/$rem)
      .swiper-slide
        width 100%
        height 100%
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width (670/$rem)
          height (385/$rem)
          padding 0 (10/$rem)
          display block
          float left
          img
            display inline-block
            width (670/$rem)
            height (385/$rem)
  .ItemList
    width 100%
    height (286/$rem)
    overflow hidden
    display flex
    ul
      display flex
      justify-content center
      align-items center
      padding (32/$rem) (30/$rem) (28/$rem) (30/$rem)
      margin-bottom (20/$rem)
      background-color: #fff;
      li
        width (164/$rem)
        height (210/$rem)
        margin-right (24/$rem)
        float: left;
        position: relative
        overflow: hidden
        a
          height 100%
          width 100%
          .img-warp
            width (164/$rem)
            height (164/$rem)
            margin-bottom (22/$rem)
            img
              width 100%
              height 100%
          .item-name
            width (184/$rem)
            height (40/$rem)
            text-align center
            span
              display block
              font-size (18/$rem)
              color #333

  .recommend
    padding 0 (30/$rem) (40/$rem)
    margin-bottom (20/$rem)
    background #ffffff
    .title
      width (690/$rem)
      height (120/$rem)
      line-height (120/$rem)
      font-size (32/$rem)
      text-align center
    .itemMajor
      margin-bottom (30/$rem)
      position relative
      color #333333
      border 1px solid #d9d9d9
      border-radius (8/$rem)
      overflow hidden
      .title_name
        padding: 0 .21333rem
        height: .48rem
        line-height: .48rem;
        background-color: rgba(255,255,255,.9);
        border: 1px solid #d9d9d9;
        border-radius (15/$rem)
        color #333
        font-size (28/$rem)
        position absolute
        top (15/$rem)
        left (15/$rem)
      img
        height (386/$rem)
        border-radius (8/$rem) 8px 0 0
      .info
        box-sizing border-box
        padding (24/$rem) (20/$rem) (67/$rem)
        border solid 1px #eeeeee
        color #333333
        .line1
          margin-bottom (30/$rem)
          display flex
          justify-content space-between
          align-items center
          line-height 1.2
          height (43/$rem)
          .Linetitle
            flex 1
            margin-right (170/$rem)
            font-size (36/$rem)
            ellipsis()
          .price
            line-height 1
            font-size (32/$rem)
            text-align center
            min-width (115/$rem)
        .line2
          font-size (28/$rem)
          color #7f7f7f
          line-height 1.2
        .line3
          font-size (30/$rem)
        
    .items
      display flex
      background #ffffff
      color #333333
      border 1px solid #d9d9d9
      box-sizing border-box
      border-radius (4/$rem)
      margin-bottom (30/$rem)
      .topicInfo
        flex 1
        display flex
        flex-direction column
        justify-content center
        overflow hidden
        position relative
        padding-left (20/$rem)
        padding-right (30/$rem)
        border solid 1px #eeeeee
        .line1
          margin-bottom (14/$rem)
          display flex
          align-items center
          padding-right (100/$rem)
          line-height 1.2
          box-sizing border-box
          .photo_img
            width (46/$rem)
            height (46/$rem)
            border-radius 100%
            padding (10$rem)
          >.topicTitle
            height (38/$rem)
            ellipsis()
            font-size (14/$rem)
            margin-right (30/$rem)
        .line3
          font-size (30/$rem)
          color #333333
        .line2
          .cont
            font-size (24/$rem)
            line-height 1.5
            margin (25/$rem) 0
            color #7f7f7f
            display -webkit-box
            display block
            -webkit-line-clamp: 2;
            ellipsis()
      .topicPic
        position relative
        width (280/$rem)
        height (272/$rem)
        overflow hidden
        img
          width 100%
        >.topicTag
          position absolute
          top (10/$rem)
          left (10/$rem)
          height (36/$rem)
          font-size 0
          >.tag
            display inline-block
            padding 0 (16/$rem)
            height (34/$rem)
            font-size (24/$rem)
            line-height (34/$rem)
            border 1px solid #d9d9d9
            border-radius (20/$rem)
            color #333333
            background-color rgba(255,255,255,.9)
      &:last-child
        margin-bottom 0
</style>


