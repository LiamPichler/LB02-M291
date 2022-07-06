<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/task01">Task 01</router-link> |
      <router-link to="/task02">Task 02</router-link> |
      <router-link to="/task03">Task 03</router-link> |
      <router-link to="/task06">Task 06</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
@import 'styles/global';

#app {
  width: 100vw;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
}

.white-text {
  color: white;
}

#nav {
  width: 100%;
  background-color: #E9E9E9;
  padding: 20px;
  margin: 0px;
}

</style>
