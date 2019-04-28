<template>
  <div>
    <header>
      <i class="iconfont icon-icontymicrophone"></i>
      <div><input type="text" class="iconfont search" :placeholder='icon'></div>
      <i class="iconfont icon-youyinpin"></i>
    </header>
    <ul>
      <li><router-link to="/">音乐</router-link></li>
      <li><router-link to="/video">视频</router-link></li>
      <li><router-link to="/radio">电台</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        icon:'\ue65a 搜索音乐、视频、歌词、电台',
      }
    }
  }
</script>

<style>
  @import url(../../style/home/home.css);
</style>
