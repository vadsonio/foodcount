<template>
  <tr>
    <td colspan="1" class="compare-details__cell chart">
      <p>
        Процентное соотношение:
      </p>

      <div class="chart-sm">
        <SinglePieChart class="chart-sm__chart" :params="{
          kcal: Number(compareItem.kcal), 
          proteins: countPercent(compareItem, 'proteins'), 
          fats: countPercent(compareItem, 'fats'),
          carbohydrates: countPercent(compareItem, 'carbohydrates')
        }"/>
        <div class="chart-sm__centered-kcal">
          {{compareItem.kcal}}
          <div class="chart-sm__centered-title">
            ккал
          </div>
        </div>
      </div>
      
    </td>
    <td colspan="3" class="compare-details__cell chart-legend">
      <div class="chart-legend__wrap">
        <ul>
          <li class="chart-legend__item weight">
            <p>
              <span class="font-weight-normal">Вес</span> - {{compareItem.weight}} гр.
            </p>
          </li>
          <li class="chart-legend__item proteins">
            <p>
              Белки - {{compareItem.proteins}} гр.
            </p>
            <span>
              ({{countPercent(compareItem, 'proteins')}}%)
            </span>
          </li>
          <li class="chart-legend__item fats">
            <p>
              Жиры - {{compareItem.fats}} гр.
            </p>
            <span>
              ({{countPercent(compareItem, 'fats')}}%)
            </span>
          </li>
          <li class="chart-legend__item carbohydrates">
            <p>
              Углеводы - {{compareItem.carbohydrates}} гр. 
            </p>
            <span>
              ({{countPercent(compareItem, 'carbohydrates')}}%)
            </span>
          </li>
        </ul>
      </div>
    </td>
    <td colspan="2" class="compare-details__cell chart-daily-norm">
      <div class="chart-daily-norm__wrap">
        <ul>
          <li class="chart-daily-norm__item title">
            <p>
              В % от дневной нормы:
            </p>
          </li>
          <li class="chart-daily-norm__item proteins">
            <span>
              {{dailyPercent(compareItem, 'proteins')}} %
            </span>
          </li>
          <li class="chart-daily-norm fats">
            <span>
              {{dailyPercent(compareItem, 'fats')}} %
            </span>
          </li>
          <li class="chart-daily-norm carbohydrates">
            <span>
              {{dailyPercent(compareItem, 'carbohydrates')}} %
            </span>
          </li>
        </ul>
        <small class="chart-daily-norm__small">
          *Значение приведено для диеты, основанной на 2000 ккал/сутки
        </small>
      </div>
    </td>
  </tr>
  
</template>

<script>
import SinglePieChart from './ItemPieChart.vue';

export default {
  name: 'CompareBlockChart',
  components:{
    SinglePieChart
  },
  props: ["compareInfo"],
  data(){
    return{
      compareItem: this.compareInfo,
      dietParams: {
        proteins: 90,
        fats: 60,
        carbohydrates: 250
      }
    }
  },
  methods: {
    countPercent(object, item){
      if(object.weight === 0){
        return 0
      }
      let summ = Number(object.proteins) + Number(object.fats) + Number(object.carbohydrates),
          itemPercent = (object[item] / summ) * 100,
          itemToFixed = itemPercent.toFixed(1);

      return itemToFixed;
    },
    dailyPercent(itemObject, param){
      let dietParam = this.dietParams[param];
      let dietPercent = (itemObject[param] * 100) / dietParam;
      return dietPercent.toFixed()
    }
  }
}
</script>

<style lang="scss">
.chart-sm{
  width: 200px;
  height: 200px;
  margin-left: 30px;
  position: relative;
  &__chart{
    position: relative;
    height: 100%;
    z-index: 3;
  }
  &__centered{
    &-kcal{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 900;
      font-size: 25px;
      text-align: center;
      z-index: 2;
    }
    &-title{
      font-size: 12px;
      font-weight: 600;
      color: #999;
    }
  }
}
.chart-legend{
  ul{
    padding: 0;
    margin: 10px 0 0;
    list-style: none;
    li{
      padding: 5px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 600;
      &.proteins{
        background: #F7D840;
      }
      &.fats{
        background: #FB439B;
      }
      &.carbohydrates{
        background: #5A0DA9;
      }
      &.weight{
        display: block;
        font-size: 20px;
        font-weight: 800;
        height: 40px;
        color: #333;
      }
      p{
        margin: 0;
      }
    }
  }
}
.chart-daily-norm{
  text-align: center;
  ul{
    padding: 0;
    margin: 10px 0 0;
    list-style: none;
    li{
      padding: 5px 15px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 600;
      &.title{
        font-size: 14px;
        height: 40px;
        color: #333;
      }
      p{
        margin: 0;
      }
    }
  }
  &__small{
    display: inline-block;
    max-width: 200px;
    font-weight: 400;
    color: #000;
  }
}
</style>