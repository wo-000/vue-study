<template>
  <div class="carts">
    <div class="item" v-for="item in shop" :key="item.id">
      <img src="../../assets/logo.png" alt="">
      <p>{{item.name}}</p>
      <span @click="add(item.id)">加入购物车</span>
    </div>
    <div class="icon" @click="jump">购物车</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {
    shop(){
      return this.$store.state.shop
    }
  },
  methods: {
    jump:function(){
      this.$router.push('/showcarts')
    },
    add(id){
      this.$store.commit('add',id)
    }
  },
};
</script>

<style scoped lang="scss">
.icon{
  position: fixed;
  right: 10px;
  bottom: 40px;
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.6s;
  &:hover{
    background: blue;
    color: #fff;
  }
}
.item{
  width: 100px;
  text-align: center;
  float: left;
  margin: 20px;
  img{
    width: 100%;
    display: block;
  }
  span{
    font-size: 12px;
    color: blue;
    padding: 4px 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.6s;
    &:hover{
      background: #ccc;
    }
  }
}
</style>
