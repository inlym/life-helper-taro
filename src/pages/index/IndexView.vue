<template>
  <view class="title">首页</view>
  <view class="one" @tap="aaa"></view>
</template>

<script setup lang="ts">
import {alovaInstant} from '../../core/http'

const aaa = () => {
  console.log('hello world')
  // Taro.navigateTo({url: '/pages/index/TestView'})
  alovaInstant.Get('/debug').then((res) => console.log(res))
}
</script>

<style scope lang="scss">
.title {
  font-size: 100px;
  color: green;
}
.one {
  height: 200px;
  width: 200px;
  background-color: red;
}
</style>
