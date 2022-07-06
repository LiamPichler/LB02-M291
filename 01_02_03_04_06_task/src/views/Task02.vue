<template>
  <div>
    <h1>Chose your ring size</h1>
    <div class="wrapper">
      <img src="../../../00_extra_sources/images/ring.png">
      <ul>
        <li v-for="n in 3" :key="n">
          <a href="#" @click="triggerAlert(n)">Size {{ n }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    triggerAlert(n) {
      alert(`Size ${n} has been chosen`)
    },
  },
}
</script>

<style lang="scss" scoped>


h1 {
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: auto;
  width: 300px;
}

ul {
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: -40px;
  margin-top: 50px;
}
li {
  display: block;
  list-style: none;
}

a {
  display: inline-block;
  background: #3E43FF;
  border-radius: 6px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
