<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item link="/">
        <p slot="icon" class="iconfont icon-wode1"></p>
        <span slot="label">发现音乐</span>
      </tabbar-item>
      <tabbar-item>
        <p slot="icon" class="iconfont icon-yinyue"></p>
        <span slot="label">我的音乐</span>
      </tabbar-item>
      <tabbar-item>
        <p slot="icon" class="iconfont icon-wode"></p>
        <span slot="label">朋友</span>
      </tabbar-item>
      <tabbar-item link="/account">
        <p slot="icon" class="iconfont icon-wode1"></p>
        <span slot="label">账号</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script type="text/javascript">
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  @import url(style/reset.css);
  @import url(iconfont/iconfont.css);

  .weui-tabbar{
    position: fixed;
    background-color: rgba(246,248,250,0.8);
  }
  .weui-tabbar:before{
    content: none;
  }
</style>
