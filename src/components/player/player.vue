<template>
  <div>
    <audio :src='url' id="audio" controls="controls" autoplay="autoplay">player</audio>
  </div>
</template>

<script>
  export default {
    name: "player",
    data(){
      return{
        url:"https://music.163.com/song/media/outer/url?id=308430.mp3"
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  @import url(../../style/home/home.css);
</style>
