<template>
  <section class="calculations">
    <div class="calculations__wrap">
      <Aside :pages="pagesNames" :activeIndex="activePageIndex" @switchActiveIndex="switchActivePage"/>
      <component :is="pages[activePageIndex].componentName"></component>
    </div>
  </section>
</template>

<script>
import Aside from '../components/calculations/Aside.vue';
import FoodDailyCalculator from '../components/calculations/FoodDailyCalculator.vue';
import TestCalculator from '../components/calculations/TestCalculator.vue';

export default {
  name: "Calculations",
  components: {
    Aside,
    FoodDailyCalculator,
    TestCalculator
  },
  data(){
    return {
      activePageIndex: 0,
      pages: [
        {
          index: 0,
          name: "Расчет Ккал вашего приёма пищи",
          componentName: "FoodDailyCalculator"
        },
        {
          index: 1,
          name: "Test",
          componentName: "TestCalculator"
        }
      ]
    }
  },
  methods: {
    scrollToTop(){
      window.scrollTo(0,0);
    },
    switchActivePage(pageIndex){
      this.activePageIndex = pageIndex;
    }
  },
  computed:{
    pagesNames(){
      return this.pages.map(pageObj => pageObj.name)
    } 
  },
  mounted(){
    this.scrollToTop();
  }
}
</script>

<style lang="scss">
  .calculations{
    padding-top: 50px;
    overflow: hidden;
    min-height: 100vh;
    height: 100%;
    &__wrap{
      display: flex;
      min-height: calc(100vh - 50px);
    }
  }
</style>