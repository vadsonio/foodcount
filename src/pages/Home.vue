<template>
  <div>
    <Banner/>
    <FeaturesList/>
    <OurPurpose/>
    <LastNews/>
    <Feedback/>
  </div>
</template>

<script>
import Banner from '../components/home/Banner.vue';
import FeaturesList from '../components/home/FeaturesList.vue';
import OurPurpose from '../components/home/OurPurpose.vue';
import LastNews from '../components/home/LastNews.vue';
import Feedback from '../components/home/Feedback.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    FeaturesList,
    OurPurpose,
    LastNews,
    Feedback
  }
}
</script>

<style>

</style>