<!--
  Using Watchers to Set New Values
-->
<template>
  <div class="container">
    <h1>Christmas discount!</h1>
    <div class="shop-container">
      <div class="product-container">
        <h3>Tungsten gold ring</h3>
        <img class="product-image" src="../../../00_extra_sources/images/ring.png">
        <strike v-show="oldDiscount">Was {{ oldDiscount }}%</strike>
        <strong> Now {{ discount }}% OFF</strong><br/>
        <img class="add" src="../../../00_extra_sources/images/shop.svg">
      </div>

      <div class="product-container">
        <h3>Tungsten purple cristal</h3>
        <img class="product-image" src="../../../00_extra_sources/images/ring2.png">
        <strike v-show="oldDiscount">Was {{ oldDiscount }}%</strike>
        <strong> Now {{ discount }}% OFF</strong><br/>
        <img class="add" src="../../../00_extra_sources/images/shop.svg">
      </div>

      <div class="product-container">
        <h3>Tungsten silver</h3>
        <img class="product-image" src="../../../00_extra_sources/images/ring3.png">
        <strike v-show="oldDiscount">Was {{ oldDiscount }}%</strike>
        <strong> Now {{ discount }}% OFF</strong><br/>
        <img class="add" src="../../../00_extra_sources/images/shop.svg">
      </div>
    </div>
    <a href="#" @click="updateDiscount">Increase discount by 5%</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
    }
  },
  watch: {
    discount: {
      handler: function (newVal, oldVal){
        console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
        this.oldDiscount = oldVal;
      },
      immediate: false,
      deep: true
    }

  },
  methods: {
    updateDiscount(){
      this.discount = this.discount + 5;
    }
  }
}
</script>
<style lang="scss" scoped>

strong {
  color: red;
}

.container {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

}

.shop-container {
  max-width: 100vw;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.add {
  width: 30px;
}

.product-image {
  width: 200px;
}

.product-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 50px;
  margin: 30px;

}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;
  width: auto;
  max-width: 200px;
  margin-top: 60px;
}
</style>
