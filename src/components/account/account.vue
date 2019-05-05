<template>
  <div class="account">
    <x-header :left-options={showBack:false}>账号<i slot="right" class="iconfont icon-youyinpin"></i></x-header>
    <div class="loginBox">
      <p>登录网易云音乐</p>
      <p>手机电脑多端同步，320k高音质无限下载</p>
      <x-button type="default" link="/login">立即登录</x-button>
    </div>
    <div class="myMessages">我的消息</div>
    <div class="marketing">
      <ul>
        <li>VIP会员</li>
        <li>商城</li>
        <li>在线听歌免流量</li>
      </ul>
    </div>
    <div class="tool">
      <ul>
        <li>设置</li>
        <li>扫一扫</li>
        <li>个性换肤</li>
        <li>夜间模式</li>
        <li>定时关闭</li>
        <li>音乐闹钟</li>
        <li>驾驶模式</li>
        <li>优惠券</li>
      </ul>
    </div>
    <div class="share">
      <ul>
        <li>分享网易云音乐</li>
        <li>关于</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { XHeader, XButton  } from 'vux'
  export default {
    components:{
      XHeader,
      XButton
    }
  }
</script>

<style scoped>
  @import url('../../style/account/account.css');
</style>
