<template>
  <div>
    <h1 v-if="false" v-text="text">Loading...</h1>
    <h2 v-else-if="false" v-html="html" />
    <a
        v-else
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'currently unavailable',
      html: '<b><i>We are sold out</i></b>',
      link: {
        url: 'https://www.digitec.ch',
        target: '_blank',
        tabindex: '0',
        title: 'Go to shop!',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 40px;
}
</style>
