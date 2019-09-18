<template>
  <div class="view">
    <div class="yus-demo-row">
      <yus-button type="primary" block>提交订单</yus-button>
    </div>
    <yus-button type="primary" block :loading="loading" @click="loading=!loading">提交订单</yus-button>
  </div>
</template>

<script>
import { Button } from "yus";

export default {
  components: {
    [Button.name]: Button
  },

  data() {
    return {
      loading: false
    };
  }
};
</script>

<style lang="less" scoped>
.view {
  padding: 10px 12px;
}
</style>
