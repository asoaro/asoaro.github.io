<template>
  <swiper :modules="modules" :pagination="{ clickable: true }" :space-between="50" :autoplay="{ disableOnInteraction: false }" navigation loop>
    <swiper-slide v-for="item in imgUrl" :key="item"><img :src="getImgSrc(item)" /></swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imgUrl: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    // 动态导入图片url
    const getImgSrc = imgUrl => new URL(`../public/${imgUrl}`, import.meta.url).href

    return {
      props,
      getImgSrc,
      modules: [Navigation, Pagination, A11y, Autoplay]
    }
  }
}
</script>

<style lang="scss">
.swiper {
  // 圆点样式
  .swiper-pagination-bullet-active {
    background: #2cb2c2;
  }
  // 箭头样式
  .swiper-button-prev:after,
  .swiper-button-next:after {
    display: none;
    color: #2cb2c2;
  }
}
.swiper:hover {
  .swiper-button-prev:after,
  .swiper-button-next:after {
    display: block;
  }
}
</style>
