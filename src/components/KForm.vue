<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  provide(){ //把自己（表单实例）作为参数传递下去，子代可以直接使用
    return {
      form:this
    }
  },
  props:{
    model:{
      type:Object,
      required: true
    },
    rules:{
      type:Object
    }
  },
  data() {
    return {

    };
  },
  methods: {
    validate(cb) {
      //执行所有的FormItem的方法
      const tasks = this.$children
      .filter(v => v.prop)
      .map(item => item.validate())

      Promise.all(tasks)
      .then(() => cb(true))
      .catch(() => cb(false))
    }
  }
};
</script>

<style scoped lang="scss">

</style>
