<template>
  <tr>
    <td colspan="2" class="compare-details__cell chart">
      <p>
        Процентное соотношение:
      </p>
      <SinglePieChart class="chart-sm__chart" :params="{
        kcal: Number(compareItem.kcal), 
        proteins: countPercent(compareItem, 'proteins'), 
        fats: countPercent(compareItem, 'fats'),
        carbohydrates: countPercent(compareItem, 'carbohydrates')
      }"/>
    </td>
    <td colspan="4" class="compare-details__cell chart-legend">
      dfkjgdkfjg
    </td>
  </tr>
  <!-- <ul class="compare-block__list" v-if="!isMobile">
    <li class="compare-block__item" v-for="(item, index) in compareList" :key="item.id">
      <h3>{{item.name}}</h3>
      <div class="compare-block__item-wrap">
        
        <div class="compare-block__item-chart">

          <div class="chart-sm">
            <SinglePieChart class="chart-sm__chart" :params="{
              kcal: Number(item.kcal), 
              proteins: countPercent(item, 'proteins'), 
              fats: countPercent(item, 'fats'),
              carbohydrates: countPercent(item, 'carbohydrates')
            }"/>
            <div class="chart-sm__centered-kcal">
              {{item.kcal}}
              <div class="chart-sm__centered-title">
                ккал
              </div>
            </div>
          </div>
          <div class="chart-sm__chart-legend" :key="item.protPercent">
            Процентное соотношение
            <ul>
              <li class="chart-sm__chart-legend-item proteins">
                <p>
                  Белки - {{item.proteins}} гр.
                </p>
                <span>
                  ({{countPercent(item, 'proteins')}}%)
                </span>
              </li>
              <li class="chart-sm__chart-legend-item fats">
                <p>
                  Жиры - {{item.fats}} гр.
                </p>
                <span>
                  ({{countPercent(item, 'fats')}}%)
                </span>
              </li>
              <li class="chart-sm__chart-legend-item carbohydrates">
                <p>
                  Углеводы - {{item.carbohydrates}} гр. 
                </p>
                <span>
                  ({{countPercent(item, 'carbohydrates')}}%)
                </span>
              </li>
              <li class="chart-sm__chart-legend-item weight">
                <p>
                  {{item.weight}} гр.
                </p>
              </li>
            </ul>
          </div>
          <p class="delete" @click="deleteFromCompareList(index)">
            <b-icon icon="trash"></b-icon>
          </p>
        </div>
        
      </div>
    </li>

    <li v-if="compareList.length === 1" class="compare-block__item compare-block__item--empty-dashed">
      Добавьте еще как минимум один продукт для более детального сравнения.
    </li>
  </ul> -->
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
      compareItem: this.compareInfo
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
  }
}
</script>

<style>

</style>