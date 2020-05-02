<template>
  <div class="home">
    <router-link to="/carts">1.购物车实例</router-link>
    <router-link to="/about">2.About</router-link>


    <h3>自定义组件</h3>
    <h4>我是表单</h4>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <form-item label="用户名" prop="username">
        <k-input v-model="model.username"></k-input>
      </form-item>
      <form-item label="密码" prop="password">
        <k-input type="password" v-model="model.password"></k-input>
      </form-item>
      <form-item>
        <my-button btntext="提交" @click.native="subForm('loginForm')"></my-button>
      </form-item>
    </k-form>


  </div>
</template>

<script>
// @ is an alias to /src
import KInput from '@/components/Kinput.vue'
import FormItem from '@/components/FormItem.vue'
import KForm from '@/components/KForm.vue'
import MyButton from '@/components/Button.vue'
export default {
  data(){
    return{
      value:'',
      model:{
        username:'',
        password:''
      },
      rules:{
        username:[{required:true,message:'请输入用户名'}],
        password:[{required:true,message:'请输入密码'}]
      }
    }
  },
  components:{
    KInput,
    FormItem,
    KForm,
    MyButton
  },
  methods: {
    subForm(formName){
      this.$refs[formName].validate(valid=>{
        if(valid) {
          alert('校验成功')
        }else {
          alert('校验失败')
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  a{
    text-decoration: none;
    color: rgb(68, 130, 245);
    margin: 20px;
    display: block;
  }
</style>
