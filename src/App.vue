<template>
  <div id="app">
    <Header/>
      <router-view></router-view>
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
@import './scss/main.scss';

</style>
