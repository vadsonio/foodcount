<template>
  <div class="compare-details"> 

    <table>
      <thead>
        <tr>
          <td>
            Название
          </td>
          <td>
            Вес, гр
          </td>
          <td>
            Белки, гр
          </td>
          <td>
            Жиры, гр
          </td>
          <td>
            Углеводы, гр
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comparingItem, index) in comparingList" :key="index">
          <td>
            {{comparingItem.name}}
          </td>
          <td>
            {{comparingItem.weight}}
          </td>
          <td>
            <div class="compare-details__progressive-bar" v-b-tooltip.hover :title="comparingItem.proteins + ' гр.'">
              <span class="compare-details__progressive-bar-fill proteins" :style="{'width': compareItem(comparingItem.proteins, 'proteins')+'%'}">

              </span>
            </div>
          </td>
          <td>
            <div class="compare-details__progressive-bar">
              <span class="compare-details__progressive-bar-fill fats" :style="{'width': compareItem(comparingItem.fats, 'fats')+'%'}">

              </span>
            </div>
          </td>
          <td>
            <div class="compare-details__progressive-bar">
              <span class="compare-details__progressive-bar-fill carbohydrates" :style="{'width': compareItem(comparingItem.carbohydrates, 'carbohydrates')+'%'}">

              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
export default {
  name: "CompareBlockDetailes",
  props: ["compareArray"],
  data(){
    return {
      comparingList: this.compareArray
    }
  },
  computed:{
    
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
  .compare-details{
    h3{
      font-size: 16px;
    }
    table{
      width: 100%;
      thead{
        td{
          padding: 0;
        }
      }
    }
    &__progressive-bar{
      position: relative;
      height: 8px;
      border-radius: 6px;
      overflow: hidden;
      background: #ececec;
      &-fill{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        &.proteins{
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
  }
</style>