<template>
  <div>
    <!-- 自定义插槽组件 -->
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">
      {{error}}
    </p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  inject:['form'],
  props:{
    label:{
      type:String,
      default:''
    },
    prop:{
      type:String
    }
  },
  data(){
    return{
      error:""
    }
  },
  mounted() {
    //监听校验的事件
    this.$on('validate',this.validate)
  },
  methods: {
    validate(){
      //执行具体的校验

      //1.获取校验规则
      const rules=this.form.rules[this.prop];
      
      //2.获取校验的值
      const value=this.form.model[this.prop];

      //3.校验对象
      const descriptor = {[this.prop]:rules}

      //4.创建校验器
      const schema=new Schema(descriptor);
      schema.validate({[this.prop]:value},error=>{
        if(error){
          this.error=error[0].message;
        }else{
          this.error=""
        }
      })
    }
  },
};
</script>

<style scoped lang="scss">

</style>
