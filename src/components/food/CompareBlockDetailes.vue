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
            <div class="d-flex align-items-center">
              <div class="compare-details__progressive-bar" v-b-tooltip.hover :title="comparingItem.proteins + ' гр.'">
                <span class="compare-details__progressive-bar-fill proteins" :style="{'width': compareItem(comparingItem.proteins, 'proteins')+'%'}">

                </span>
              </div>
              <span class="compare-details__lable-right">
                {{comparingItem.proteins}}
              </span>
            </div>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="compare-details__progressive-bar" v-b-tooltip.hover :title="comparingItem.fats + ' гр.'">
                <span class="compare-details__progressive-bar-fill fats" :style="{'width': compareItem(comparingItem.fats, 'fats')+'%'}"></span>
              </div>
              <span class="compare-details__lable-right">
                {{comparingItem.fats}}
              </span>
            </div>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="compare-details__progressive-bar">
                <span class="compare-details__progressive-bar-fill carbohydrates" :style="{'width': compareItem(comparingItem.carbohydrates, 'carbohydrates')+'%'}">

                </span>
              </div>
              <span class="compare-details__lable-right">
                {{comparingItem.carbohydrates}}
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
    margin-bottom: 30px;
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
          td:first-child{
            padding-left: 10px;
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
    &__lable-right{
      font-size: 12px;
      background: #F7D840;
      color: #000;
      border-radius: 5px;
      padding: 0px 6px;
      margin-left: 6px;
      font-weight: 700;
    }
  }
</style>