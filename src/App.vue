<template>
  <div id="app" v-scroll="enableScroll">
    <Header/>
    <Banner/>
    <FeaturesList :scrollPosMain="scrollPosition"/>
    <OurPurpose :scrollPosMain="scrollPosition"/>
    <LastNews/>
    <Feedback/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/common/Header.vue';
import Banner from './components/home/Banner.vue';
import FeaturesList from './components/home/FeaturesList.vue';
import OurPurpose from './components/home/OurPurpose.vue';
import LastNews from './components/home/LastNews.vue';
import Feedback from './components/home/Feedback.vue';
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
    Banner,
    FeaturesList,
    OurPurpose,
    LastNews,
    Feedback,
    Footer
  },
  methods:{
    enableScroll(){
      this.scrollPosition = window.scrollY;
    }
  }
}
</script>

<style>

</style>
