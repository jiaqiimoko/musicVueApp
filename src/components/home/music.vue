<template>
  <div class="music">
    <header>
      <i class="iconfont icon-icontymicrophone"></i>
      <router-link to="/search"><input type="text" class="iconfont search" :placeholder='icon' ></router-link>
      <i class="iconfont icon-youyinpin"></i>
    </header>
    <ul>
      <li><router-link to="/">音乐</router-link></li>
      <li><router-link to="/video">视频</router-link></li>
      <li><router-link to="/radio">电台</router-link></li>
    </ul>
    <swiper loop auto :list="music_swiper_list" :index="swiper_index" @on-index-change="swiper_onIndexChange" dots-position="center" height="160px"></swiper>
    <grid>
      <grid-item label="私人FM">
        <p slot="icon" class="iconfont icon-icon--"></p>
      </grid-item>
      <grid-item label="每日推荐">
        <p slot="icon" class="iconfont icon-rili"></p>
      </grid-item>
      <grid-item label="歌单">
        <p slot="icon" class="iconfont icon-liebiao"></p>
      </grid-item>
      <grid-item label="排行榜">
        <p slot="icon" class="iconfont icon-paixingbang"></p>
      </grid-item>
    </grid>
    <div class="RecommendTitle">
      <span>推荐歌单</span>
    </div>
    <grid :cols="3" class="RecommendList">
      <grid-item :label="item.name" v-for="item in personalized" :key="item.id" :href="'http://musicapi.leanapp.cn/playlist/detail?id=' + item.id">
          <img slot="icon" :src="item.picUrl">
      </grid-item>
    </grid>
    <div style="height: 60px;"></div>
  </div>
</template>

<script>
  import { Swiper,Grid, GridItem } from 'vux'
  const swiperList = [
    {
    url:'javascript:;',
    img:'static/images/music_swiper01.png',
  },{
    url:'javascript:;',
    img:'/static/images/music_swiper02.png'
  },{
    url:'javascript:;',
    img:'/static/images/music_swiper03.png'
  },{
    url:'javascript:;',
    img:'/static/images/music_swiper04.png'
  },{
    url:'javascript:;',
    img:'/static/images/music_swiper05.png'
  },{
    url:'javascript:;',
    img:'/static/images/music_swiper06.png'
  }]

  export default {
    components:{
      Swiper,
      Grid,
      GridItem
    },
    methods:{
      swiper_onIndexChange(index){
        this.swiper_index = index
      },
      getPersonalized(){
        this.axios.get(`http://musicapi.leanapp.cn/personalized`).then((response) => {
          this.personalized = response.data.result;
          this.listDetail = "http://musicapi.leanapp.cn/playlist/detail?id=" + response.data.result.id;
        })
      }
    },
    created:function(){
        this.getPersonalized();
    },
    data () {
      return {
        icon:'\ue65a 搜索音乐、视频、歌词、电台',
        music_swiper_list:swiperList,
        swiper_index:0,
        personalized:'',
        listDetail:''
      }
    }
  }


</script>
<style>
  @import url(../../style/home/home.css);
</style>
