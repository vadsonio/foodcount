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
          <td></td>
        </tr>
      </thead>
      <tbody>
        <template v-for="(comparingItem, index) in compareArray">
          <tr :key="'compare-item-' + index">
            <td class="compare-details__cell name">
              <p>
                {{comparingItem.name}}
              </p>
              <div class="more-details w-100 d-flex align-items-center">
                Детальнее
                <span @click="showPersonalChart(comparingItem.id)">
                  <b-icon icon="chevron-down"></b-icon>
                </span>
              </div>
              
            </td>
            <td class="compare-details__cell weight">
              <span class="compare-details__weight">
                {{comparingItem.weight}}
              </span>
            </td>
            <td class="compare-details__cell progress-cell">
              <div class="d-flex align-items-center">
                <div class="compare-details__progressive-bar" v-b-tooltip.hover :title="comparingItem.proteins + ' гр.'">
                  <span class="compare-details__progressive-bar-fill proteins" :style="{'width': compareItem(comparingItem.proteins, 'proteins')+'%'}"></span>
                </div>
                <span class="compare-details__lable-right">
                  {{comparingItem.proteins}}
                </span>
              </div>
            </td>
            <td class="compare-details__cell progress-cell">
              <div class="d-flex align-items-center">
                <div class="compare-details__progressive-bar" v-b-tooltip.hover :title="comparingItem.fats + ' гр.'">
                  <span class="compare-details__progressive-bar-fill fats" :style="{'width': compareItem(comparingItem.fats, 'fats')+'%'}"></span>
                </div>
                <span class="compare-details__lable-right">
                  {{comparingItem.fats}}
                </span>
              </div>
            </td>
            <td class="compare-details__cell progress-cell">
              <div class="d-flex align-items-center">
                <div class="compare-details__progressive-bar">
                  <span class="compare-details__progressive-bar-fill carbohydrates" :style="{'width': compareItem(comparingItem.carbohydrates, 'carbohydrates')+'%'}"></span>
                </div>
                <span class="compare-details__lable-right">
                  {{comparingItem.carbohydrates}}
                </span>
              </div>
            </td>
            <td class="compare-details__cell delete">
              <span @click="deleteComparingItem(comparingItem.id)">
                <b-icon icon="trash"></b-icon>
              </span>
            </td>
          </tr>

          <CompareBlockChart 
            :key="'compare-item-chart' + index" 
            v-if="chartsOpened.includes(comparingItem.id)" 
            class="compare-details__chart-row"
            :compareInfo="comparingItem"/>
          
        </template>
      </tbody>
    </table>


  </div>
</template>

<script>
import CompareBlockChart from './CompareBlockChart.vue';

export default {
  name: "CompareBlockDetailes",
  props: ["compareArray"],
  components: {
    CompareBlockChart
  },
  data(){
    return {
      chartsOpened: []
    }
  },
  methods: {
    compareItem(currentValue, valueName){
      let values = this.compareArray.map(item => item[valueName]),
          maxValue = Math.max(...values),
          currPercent = (currentValue * 100) / maxValue;

      return currPercent
    },
    showPersonalChart(id){
      if(id){
        if(this.chartsOpened.includes(id)){
          this.chartsOpened = this.chartsOpened.filter(item => item !== id)
        } else {
          this.chartsOpened.push(id);
        }
      }
    },
    deleteComparingItem(id){
      this.$emit('deleteItem', id);
    }
  }
}
</script>

<style lang="scss">
  .compare-details{
    // margin-bottom: 30px;
    h3{
      font-size: 16px;
    }
    table{
      width: 100%;
      thead{
        font-size: 13px;
        color: #333;
        font-weight: 600;
        td{
          padding: 0;
          min-width: 50px;
          &:nth-child(3){
            width: 20%;
          }
          &:nth-child(4){
            width: 20%;
          }
          &:nth-child(5){
            width: 20%;
          }
        }
      }
      tbody{
        &:before {
          content:"@";
          display:block;
          line-height:10px;
          text-indent:-99999px;
        }
        tr{
          border-bottom: 1px solid #f2f2f2;
          &:last-child{
            border-bottom: none;
          }
          td:first-child{
            padding: 5px 10px;
            font-size: 14px;
            font-weight: 700;
          }
          td:nth-child(2){
            font-size: 13px;
            padding-left: 10px;
          }
        }
      }
    }
    &__cell{
      &.name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        p{
          margin: 0;
          width: 100%;  
        }
        span{
          font-size: 10px;
          border: 1px solid #cacaca;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-left: 5px;
          &:hover{
            background: #ebeaea;
          }
        }
        .more-details{
          font-size: 12px;
          font-weight: 400;
          color: #707070;
        }
      }
      &.delete{
        text-align: center;
        cursor: pointer;
        span{
          padding: 10px;
        }
      }
    }
    &__progressive-bar{
      position: relative;
      height: 8px;
      width: 140px;
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
    &__chart-row{
      background: #f7f7f7;
    }
    &__lable-right{
      font-size: 12px;
      background: #F7D840;
      color: #000;
      border-radius: 5px;
      padding: 0px 6px;
      margin-left: 6px;
      font-weight: 700;
    }
    &__weight{
      font-weight: 800;
      color: #000;
    }
  }
</style>