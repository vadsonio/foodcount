<template>
  <div class="compare-details-mobile">
    <ul class="compare-details-mobile__items-names-list">
      <li v-for="(comparingItem, index) in comparingList" :key="index" class="compare-details-mobile__item-name">
        <p>{{comparingItem.name}}</p>
        <span>{{comparingItem.weight}} гр.</span>
      </li>
    </ul>

    <VueSlickCarousel v-bind="settings">
      
      <div>
        <div v-for="comparingItem in comparingList" :key="comparingItem.name" class="compare-details-mobile__progress">
          <span class="compare-details-mobile__start-pos">0</span>
          <div class="compare-details-mobile__progressive-bar">
            <span class="compare-details-mobile__progressive-bar-fill protein" :style="{'width': compareItem(comparingItem.proteins, 'proteins')+'%'}"></span>
          </div>
          <span class="compare-details-mobile__finish-pos">{{comparingItem.proteins}}</span>
        </div>
        <span class="compare-details-mobile__category-name protein">
          Белок
        </span>
      </div>
        
      <div>
        <div v-for="comparingItem in comparingList" :key="comparingItem.name">
          {{comparingItem.fats}}
        </div>
        <span>
          Жиры
        </span>
      </div>

      <div>
        <div v-for="comparingItem in comparingList" :key="comparingItem.name">
          {{comparingItem.carbohydrates}}
        </div>
        <span>
          Углеводы
        </span>
      </div>
    </VueSlickCarousel>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: "CompareBlockDetailesMobile",
  props: ["compareArray"],
  components: { VueSlickCarousel },
  data(){
    return {
      comparingList: this.compareArray,
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false
      }
    }
  },
  methods: {
    compareItem(currentValue, valueName){
      let values = this.comparingList.map(item => item[valueName]),
          maxValue = Math.max(...values),
          currPercent = (currentValue * 100) / maxValue;

      return currPercent
    }
  }
}
</script>

<style lang="scss">
  .compare-details-mobile{
    &__items-names-list{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    &__item-name{
      margin-bottom: 10px;
      padding: 5px 10px;
      border: 1px solid #efefef;
      border-radius: 6px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        margin: 0;
      }
      span{
        padding: 2px 5px;
        flex-shrink: 0;
        font-size: 14px;
        border-radius: 6px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, .4);
        color: #fff;
        background: #FF3D87;
      }
    }
    &__progress{
      padding-top: 20px;
      position: relative;
    }
    &__start-pos{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      font-weight: 600;
    }
    &__finish-pos{
      position: absolute;
      top: 0;
      right: 0;
      font-size: 13px;
      font-weight: 600;
    }
    &__progressive-bar{
      position: relative;
      height: 8px;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 10px;
      background: #ececec;
      &-fill{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        &.protein{
          background: #F7D840;
        }
      }
    }
    &__category-name{
      margin: 10px 0 10px;
      padding: 2px 5px;
      display: inline-block;
      border-radius: 5px;
      &.protein{
        color: #fff;
        background: #F7D840;
      }
    }
  }
</style>