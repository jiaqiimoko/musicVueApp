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
    <card v-for="item in video_list">
      <img slot="header" :src="item.cover" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p style="font-size:16px;line-height:3;padding-left: 10px;font-weight: 600">{{item.name}}</p>
        <p class="playCount">{{item.playCount}}</p>
      </div>
    </card>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { Card } from 'vux'
  export default {
    components: {
      Card
    },
    data(){
      return {
        icon:'\ue65a 搜索音乐、视频、歌词、电台',
        video_list:''
      }
    },
    created:function () {
      this.axios.get(`http://musicapi.leanapp.cn/top/mv?limit=10`).then((response) => {
        var data = response.data.data;
        $(data).each(function (i, d) {
          var count = String(d.playCount);
          if(count.length > 5){
            d.playCount = count.slice(0,-4) + '万';
          }
        })
        this.video_list = data;
      });
    },
  }
</script>

<style>
  @import url(../../style/home/home.css);
  .weui-panel{
    margin-top: 0;
  }
  .playCount{
    position: relative;
    top: -75px;
    left: 15px;
    color: white;
    font-size: 12px;
  }
</style>
