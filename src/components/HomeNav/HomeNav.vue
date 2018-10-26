<template>
  <div class="home_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in homeData.focusList" :key="item.id">
            <img :src="item.picUrl">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="nav_service">
      <div class="service_item" v-for="(policy,index) in homeData.policyDescList" :key="index">
        <img class="u-icon" :src="policy.icon"></img>
        <span class="text">{{policy.desc}}</span>
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
      ...mapState(['homeData']),
    },
    watch:{
      // 注意: 状态数据变化后, 更新对应的界面是异步进行的
      homeData (value) { // categorys状态数据更新了立即
        // 必须在状态数据更新之后执行
        this.$nextTick(() => { // 回调函数在界面更新之后立即执行
          // 初始化列表显示之后执行
          new Swiper('.swiper-container', {
            loop: true, // 循环模式
            autoplay: {
              autoplay:true,
              delay: 3000
            },
            pagination: {// 如果需要分页器
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/minxin'
  .home_nav
    width 100%
    height (442/$rem)
    margin-top (148/$rem)
    .swiper-container
      width 100%
      height (370/$rem)
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
        img 
          width 100%
          height 100%
    .nav_service
      height (72/$rem)
      width 100%
      display flex
      .service_item
        flex 1
        display flex
        text-align center
        align-items center
        .u-icon
          display block
          width (30/$rem)
          height (30/$rem)
          margin-left 10px
        .text
          font-size (24/$rem)
</style>
