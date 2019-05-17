<template>
  <div class="myp">
    <!--<group>-->
      <x-input type="tel" v-model="loginname" placeholder="手机号" :style="{'border-bottom':'1px solid #fff;'}"></x-input>
      <x-input type="password" v-model="password" placeholder="密码" :style="{'border-bottom':'1px solid #fff;'}"></x-input>
    <!--</group>-->
    <x-button @click.native="login">ok~~</x-button>
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
            nickname:"",
            msg:"hello world"
          }
      },
      methods:{
          login(){
            this.axios.get(`https://musicapi.leanapp.cn/login/cellphone?phone=`+this.loginname+`&password=`+this.password).then((response) => {
              console.log(response.data.profile.nickname)
              this.nickname = response.data.profile.nickname
            })
          }
      },
      beforeCreate:function(){
        console.log("beforeCreate: ")
        console.log(this.msg)//undefined
        console.log(document.getElementsByClassName("myp")[0])//undefined
      },
      created:function(){
        console.log("created: ")
        //console.log('created:这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数')
        this.msg+='!!!'
        console.log(this.msg)//hello world !!!
        console.log(document.getElementsByClassName("myp")[0])//undefined
      },
      beforeMount:function(){
        console.log("beforeMount: ")
        //console.log('beforeMount：虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated')
        this.msg+='@@@@'
        console.log(this.msg)//hello world !!! @@@@
        console.log(document.getElementsByClassName("myp")[0])//undefined
      },
      mounted:function(){
        console.log("mounted: ")
        // console.log('mounted：此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了')
        console.log(this.msg)//hello world !!! @@@@
        console.log(document.getElementsByClassName("myp")[0]) // 可以获取
      },
      beforeUpdate:function(){
        //这里不能更改数据，否则会陷入死循环
        console.log('beforeUpdate:重新渲染之前触发')
        console.log('然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染')
      },
      updated:function(){
        //这里不能更改数据，否则会陷入死循环
        console.log('updated:数据已经更改完成，dom也重新render完成')
      },
      beforeDestroy:function(){
        console.log('beforeDestory:销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等...')
      },
      destroyed:function(){
        console.log('destroyed:组件的数据绑定、监听...都去掉了,只剩下dom空壳，这里也可以善后')
      }
    }
</script>

<style scoped>

</style>
