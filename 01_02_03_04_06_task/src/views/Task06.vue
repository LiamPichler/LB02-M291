<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h3>Provide number of rings you want to order</h3>
    <img src="../../../00_extra_sources/images/ring3.png">
    <input v-model="items" placeholder="Total amount" />
    <h3 class="output">{{ totalValidated }}</h3>
    <a class="order-button">order</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: 1
    }
  },
  computed: {
    total() {
      return this.items
    },
    totalValidated() {
      if (this.total < 1) {
        return 'The total must be more than zero'
      }
      else if (this.total < 5){
        return 'If you order more than 5 rings you wont pay for shipping'
      }
    }

  }
}
</script>


<style>

img {
  width: 200px;
}

.order-button {
  display: inline-block;
  background: #3E43FF;
  border-radius: 6px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}


.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
  color: red;
}
</style>
