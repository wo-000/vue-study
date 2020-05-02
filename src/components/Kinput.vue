<template>
  <div>
    <!-- 自定义组件 -->
    <input :type="type" :value="value" @input="changeInput">
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    }

  },
  methods: {
    changeInput(e){
      this.$emit('input',e.target.value);

      //通知父组件校验
      this.$parent.$emit('validate');
    }
  },
};
</script>

<style scoped lang="scss">

</style>
