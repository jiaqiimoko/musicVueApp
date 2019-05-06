<template>
  <div>
    <!--<group>-->
      <x-input type="tel" v-model="loginname" placeholder="手机号" :style="{'border-bottom':'1px solid #fff;'}"></x-input>
      <x-input type="password" v-model="password" placeholder="密码" :style="{'border-bottom':'1px solid #fff;'}"></x-input>
    <!--</group>-->
    <x-button @click.native="login">ojbk</x-button>
    <p>输入网易云音乐手机号与密码，显示你的昵称：</p>{{nickname}}
  </div>
</template>

<script>
  import { Group, XInput, XButton } from 'vux'

    export default {
      name: "login",
      components: {
        XInput,
        Group,
        XButton
      },
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
