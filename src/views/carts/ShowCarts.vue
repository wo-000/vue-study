<template>
  <div>
    <div class="item" v-for="item in shop" :key="item.id">
      <img src="../../assets/logo.png" alt="">
      <p>{{item.name}}</p>
      <p>商品单价：{{item.price}}</p>
      <span @click="cut(item.id)">-</span>{{item.count}}<span @click="add(item.id)">+</span>
    </div>
    
    <p>商品总价：{{sum}}</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      // sum:0
    };
  },
  computed: {
    shop(){
      return this.$store.state.shop
    },
    sum(){
     return this.$store.state.shop.reduce((tatol,currentValue)=>{
        return tatol+currentValue.price*currentValue.count;
      },0)
    }
  },
  methods: {
    add(id){
      this.$store.commit('add',id)
    },
    cut(id){
      this.$store.commit('cut',id)
    }
  },
};
</script>

<style scoped lang="scss">
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
