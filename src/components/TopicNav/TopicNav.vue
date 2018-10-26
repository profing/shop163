<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in topicData.banner">
        <a href="javascript:" class="link_to_food">
          <img :src="item.picUrl">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    computed:{
      ...mapState(['topicData']),
    },
    watch:{
      // 注意: 状态数据变化后, 更新对应的界面是异步进行的
      topicData (value) { // categorys状态数据更新了立即
        // 必须在状态数据更新之后执行
        this.$nextTick(() => { // 回调函数在界面更新之后立即执行
          // 初始化列表显示之后执行
          new Swiper('.swiper-container', {
            loop: true, // 循环模式
            centeredSlides: true,
            slidesPerView: '1.24',
            spaceBetween:30,
          })
        })
      }
    },    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .swiper-container
    width 100%
    height (433/$rem)
    margin-top (88/$rem)
    background #ffffff
    .swiper-wrapper
      width: 100%
      height (385/$rem)
      padding (24/$rem) 0
      margin 0 (2/$rem)
      transform translateX(3px)
      .swiper-slide
        width 100%
        height 100%
        .link_to_food
          width (670/$rem)
          height (385/$rem)
          // padding 0 (10/$rem)
          display block
          float left
          img
            display inline-block
            width 100%
            height (385/$rem)  

</style>

