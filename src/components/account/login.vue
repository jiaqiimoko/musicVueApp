<template>
  <div>
    <input type="text" v-model="loginname">
    <input type="password" v-model="password">
    <button @click="login">ok</button>
    <p>输入网易云音乐手机号与密码，显示你的昵称：</p>{{nickname}}
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
          return{
            loginname:"",
            password:"",
            nickname:""
          }
      },
      methods:{
          login(){
            this.axios.get(`https://musicapi.leanapp.cn/login/cellphone?phone=`+this.loginname+`&password=`+this.password).then((response) => {
              console.log(response.data.profile.nickname)
              this.nickname = response.data.profile.nickname
            })
          }
      }
    }
</script>

<style scoped>

</style>
