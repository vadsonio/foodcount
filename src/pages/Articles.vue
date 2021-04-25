<template>
  <section class="articles">
    <Aside/>
    <Main/>
  </section>
</template>

<script>
import Aside from '../components/articles/Aside.vue';
import Main from '../components/articles/Main.vue';

export default {
  name: 'Articles',
  components: {
    Aside,
    Main
  }
}
</script>

<style lang="scss">
  .articles{
    padding-top: 50px;
    min-height: calc(100vh - 220px);
    display: flex;
    align-items: stretch;
  }
</style>