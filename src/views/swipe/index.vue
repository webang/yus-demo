<template>
  <Swipe 
  class="swipe"
  direction="horizontal"
  :activeIndex="activeIndex"
  :loop="loop"
  :speed="speed"
  :autoplay="autoplay"
  @index-changed="handleIndexChanged"
>
  <SwipeItem class="slide bg1">0</SwipeItem>
  <SwipeItem class="slide bg2">1</SwipeItem>
  <SwipeItem class="slide bg3">2</SwipeItem>
</Swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'yus-swipe'

export default {
    components: {
    Swipe,
    SwipeItem
  },
  data() {
    return {
      loop: false,
      autoplay: false,
      speed: 300,
      direction: 'horizontal',
      activeIndex: 0
    }
  },
  methods: {
    handleIndexChanged(index) {
      this.activeIndex = index;
    }
  }
}
</script>

<style scoped>
.swipe {
  height: 200px;
  line-height: 200px;
  font-size: 30px;
  color: #fff;
  text-align: center;
}

.bg1 {
  background: #2196F3;
}

.bg2 {
  background: #4caf50;
}

.bg3 {
  background: #ff5722;
}
</style>