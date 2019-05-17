<template>
  <div>
    <group>
      <cell-box v-for="(item,index) in musicList" >
        <span v-on:click="playMusic(item)">
          {{index + 1}} {{item.name}}
        </span>
      </cell-box>
    </group>

    <!--<audio src='https://music.163.com/song/media/outer/url?id=308430.mp3' id="audio"></audio>-->
  </div>
</template>

<script>
  import { Group, CellBox } from 'vux'
    export default {
      name: "list",
      components:{
        CellBox,
        Group
      },
      data(){
        return{
          musicList:[]
        }
      },
      created() {
          this.axios.get(`http://musicapi.leanapp.cn/playlist/detail?id=`+this.$route.params.id).then((response) => {
            console.log(response.data.playlist.tracks)
              this.musicList = response.data.playlist.tracks
          })
      },
      methods:{
        playMusic(item){
          this.msrc = `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`;
          document.body.addEventListener('click', function(){
            document.getElementById('music').play();
          });
        }
      }
    }
</script>

<style scoped>
  @import url(../../style/home/home.css);
</style>
