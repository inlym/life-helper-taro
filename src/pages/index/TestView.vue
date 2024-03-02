<template>
  <view class="title">测试页</view>
  <view class="one" @tap="aaa"></view>
</template>

<script setup lang="ts">
const aaa = () => {
  console.log("hello world");
};
</script>

<style scope lang="scss">
.title {
  font-size: 100px;
  color: green;
}
.one {
  height: 200px;
  width: 200px;
  background-color: blue;
}
</style>
