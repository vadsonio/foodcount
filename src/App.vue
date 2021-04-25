<template>
  <div id="app" class="app">
    <Header/>
    <div class="app__content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  data() {
    return{
      scrollPosition: null
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body{
  &.fixed{
    overflow: hidden;
  }
}
html, body {
  height: 100%;
  margin: 0;
}
.app{
  min-height: 100%;
  &__content{
    min-height: 100vh;
  }
}
</style>
