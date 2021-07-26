<template>
  <div class="compare-details-mobile">
    <ul class="compare-details-mobile__items-names-list">
      <li v-for="(comparingItem, index) in comparingList" :key="index" class="compare-details-mobile__item-name">
        <p>{{comparingItem.name}}</p>
        <span>{{comparingItem.weight}} гр.</span>
        <div>
          Детальнее
        </div>
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
        <p class="compare-details-mobile__category-name protein">
          Белки, гр.
        </p>
      </div>
        
      <div>
        <div v-for="comparingItem in comparingList" :key="comparingItem.name" class="compare-details-mobile__progress">
          <span class="compare-details-mobile__start-pos">0</span>
          <div class="compare-details-mobile__progressive-bar">
            <span class="compare-details-mobile__progressive-bar-fill fats" :style="{'width': compareItem(comparingItem.fats, 'fats')+'%'}"></span>
          </div>
          <span class="compare-details-mobile__finish-pos">{{comparingItem.fats}}</span>
        </div>
        <p class="compare-details-mobile__category-name fats">
          Жиры, гр.
        </p>
      </div>

      <div>
        <div v-for="comparingItem in comparingList" :key="comparingItem.name" class="compare-details-mobile__progress">
          <span class="compare-details-mobile__start-pos">0</span>
          <div class="compare-details-mobile__progressive-bar">
            <span class="compare-details-mobile__progressive-bar-fill carbohydrates" :style="{'width': compareItem(comparingItem.carbohydrates, 'carbohydrates')+'%'}"></span>
          </div>
          <span class="compare-details-mobile__finish-pos">{{comparingItem.carbohydrates}}</span>
        </div>
        <p class="compare-details-mobile__category-name carbohydrates">
          Углеводы, гр.
        </p>
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
        arrows: false,
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
        @media (max-width: map-get($grid-breakpoints, md)) {
          font-size: 14px;
        }
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
        &.fats{
          background: #FB439B;
        }
        &.carbohydrates{
          background: #5A0DA9;
        }
      }
    }
    &__category-name{
      margin: 35px 0 10px;
      padding: 2px 5px;
      border-radius: 5px;
      text-align: center;
      font-weight: 700;
      font-size: 12px;
      &.protein{
        color: #333;
      }
    }
    .slick-slider{
      padding-bottom: 15px;
    }
    .slick-slide{
      padding: 0 5px;
    }
    .slick-dots{
      bottom: -5px;
      li{
        width: 15px;
        height: 15px;
        &.slick-active{
          button{
            border: none;
            background: #FB439B;
          }
        }
        button{
          width: 15px;
          height: 15px;
          border: 2px solid #FB439B;
          border-radius: 50%;
          &:after,
          &:before{
            content: '';
            display: none;
          }
        }
      }
    }
  }
</style>