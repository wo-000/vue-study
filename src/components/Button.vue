<template>
  <div>
    <input type="button" :value="btntext" >
  </div>
</template>

<script>
export default {
  props:{
    btntext:{
      type:String,
      default:'按钮'
    }
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">

</style>
