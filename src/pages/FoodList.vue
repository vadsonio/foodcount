<template>
  <section class="food-list">
    <div class="container">
      <div class="food-list__search">
        <span class="food-list__search-head">Название продукта:</span>
        <b-form-input 
          v-model="searchQuery" 
          class="food-list__search-input" 
          placeholder="Введите название продукта" 
          type="search"></b-form-input>
      </div>

      
      <div class="compare-block" v-if="compareBlockPreview">
        <h2>
          Таблица сравнений
        </h2>

        <div class="compare-block__preview" v-if="compareList.length === 0">
          <p>
            Добавьте несколько продуктов, чтобы сравнить их пищевую ценность и выбрать подходящий.
          </p>
          <ul>
            <li>
              <p>- Найдите подходящие вам продукты</p>
            </li>
            <li>
              <p>- Выберите необходимый вес каждого продукта</p>
            </li>
            <li>
              <p>- Нажмите в выпадающем меню каждого продукта "Добавить в сравнение"</p>
            </li>
          </ul>
        </div>

        <div class="compare-block__wrap" v-if="compareList.length !== 0">
          
          <CompareBlockDetailes :compareArray="compareList"/>

          <ul class="compare-block__list">
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
          </ul>
          
        </div>

        <span class="compare-block__close-icon" @click="compareBlockPreview = !compareBlockPreview">
          <b-icon icon="x"></b-icon>
        </span>
      </div>

      <div class="food-list__table" v-for="(item, index) in filteredFoodList" :key="index">
        <h2 class="food-list__table-heading">
          {{item.category.name}}
          {{item.category.icon}}
        </h2>
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Вес, гр</th>
              <th>Ккал</th>
              <th>Белки, гр</th>
              <th>Жиры, гр</th>
              <th>Углеводы, гр</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subItem in filteredFoodSublist(item.list)" :key="subItem.name">
              <td>
                {{subItem.name}}

                <b-dropdown size="sm" :id="`dropdown-${index}`"  variant="link" toggle-class="text-decoration-none" no-caret>
                  <template #button-content>
                    <b-icon icon="three-dots-vertical"></b-icon>
                    <span class="sr-only">Search</span>
                  </template>
                  <b-dropdown-item @click="addToCompare(subItem)">Добавить в сравнение</b-dropdown-item>
                </b-dropdown>
              </td>
              <td>
                <input type="number" v-model.number="subItem.weight" @keyup="filterWeightInput" min="0">
              </td>
              <td>
                {{calculateItemKcal(subItem.weight, subItem.kcal)}}
              </td>
              <td>
                {{calculateItemProteins(subItem.weight, subItem.proteins)}}
              </td>
              <td>
                {{calculateItemFats(subItem.weight, subItem.fats)}}
              </td>
              <td>
                {{calculateItemCarbohydrates(subItem.weight, subItem.carbohydrates)}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>

<script>
import FList from '../apiDummyList/food_list.json';

import SinglePieChart from '../components/food/ItemPieChart.vue';
import CompareBlockDetailes from '../components/food/CompareBlockDetailes.vue';

export default {
  name: "FoodList",
  components: {
    SinglePieChart,
    CompareBlockDetailes
  },
  data(){
    return{
      searchQuery: '',
      foodlist: [],
      compareBlockPreview: true,
      compareList: []
    }
  },
  mounted(){
    this.foodlist = FList;
    this.scrollToTop();
  },
  computed: {
    filteredFoodList(){
      return this.foodlist.filter(categories => {
        let filteredList = categories.list.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
 
        if(filteredList.length > 0){
          return true
        } else {
          return false
        }
      })
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    filteredFoodSublist(list){
      return list.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    calculateItemKcal(weight, kcal){
      let defaultWeight = 100;
      if(weight < 0){
        return 0
      }
      return (weight*kcal / defaultWeight).toFixed(0);
    },
    calculateItemProteins(weight, proteins){
      let defaultWeight = 100;
      if(weight < 0){
        return 0
      }
      return (weight*proteins / defaultWeight).toFixed(2);
    },
    calculateItemFats(weight, fats){
      let defaultWeight = 100;
      if(weight < 0){
        return 0
      }
      return (weight*fats / defaultWeight).toFixed(2);
    },
    calculateItemCarbohydrates(weight, carb){
      let defaultWeight = 100;
      if(weight < 0){
        return 0
      }
      return (weight*carb / defaultWeight).toFixed(2);
    },
    filterWeightInput(e){
      if(e.target.value < 0 || e.target.value === "-"){
        e.target.value = 0
      }
    },
    addToCompare({id, name, weight, kcal, proteins, fats, carbohydrates}){
      if(!weight){
        weight = 0
      }
      let newCompareItem = {
        id,
        name,
        weight,
        kcal: (weight !== 0 ? this.calculateItemKcal(weight, kcal) : 0),
        proteins: (weight !== 0 ? this.calculateItemProteins(weight, proteins): 0),
        fats: (weight !== 0 ? this.calculateItemFats(weight, fats): 0),
        carbohydrates: (weight !== 0 ? this.calculateItemCarbohydrates(weight, carbohydrates): 0)
      }
      this.compareList.push(newCompareItem)
    },
    countPercent(object, item){
      if(object.weight === 0){
        return 0
      }
      let summ = Number(object.proteins) + Number(object.fats) + Number(object.carbohydrates),
          itemPercent = (object[item] / summ) * 100,
          itemToFixed = itemPercent.toFixed(1);

      return itemToFixed;
    },
    deleteFromCompareList(itemIndex){
      this.compareList.splice(itemIndex, 1)
    }
  }
}
</script>

<style lang="scss">
.food-list{
  padding-top: 50px;
  &__search{
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 0 20px;
    height: 120px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0px 0px 4px rgba(0,0,0,.1);
    &-head{
      margin-right: 20px;
      font-size: 30px;
      font-weight: 900;
      flex-shrink: 0;
      align-self: center;
    }
    &-input{
      padding: 20px;
      height: 80px;
      font-size: 30px;
      line-height: 1;
      border: none;
      font-weight: 700;
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #ccc;
        font-weight: 400;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        color: #ccc;
        font-weight: 400;
      }
      &:-ms-input-placeholder { /* IE 10+ */
        color: #ccc;
        font-weight: 400;
      }
      &:-moz-placeholder { /* Firefox 18- */
        color: #ccc;
        font-weight: 400;
      }
    }
  }
  &__table{
    margin-bottom: 40px;
    &-heading{
      font-size: 23px;
      font-weight: 300;
    }
    table{
      width: 100%;
      position: relative;
      border-collapse: collapse;
      border: 1px solid #eee;
      th{
        padding: 10px;
        font-size: 14px;
        font-weight: 700;
        position: sticky;
        top: 50px;
        border-bottom: 1px solid #eee;
        color: $pinkMain;
        background: #fff;
        z-index: 1;
        &:first-child{
          width: 50%;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: $pinkMain;
        }
      }
      td{
        padding: 5px 10px;
        font-size: 14px;
        border: 1px solid #eee;
        &:first-child{
          font-weight: 500;
        }
        input[type=number]{
          background: #f1f1f1;
          border: none;
          padding: 3px 10px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
          width: 80px;
        }
      }
      tr{
        &:hover{
          background: rgba(0,0,0,.02);
        }
        td:first-child{
          .dropdown{
            float: right;
          }
          .dropdown-toggle{
            padding: 0 10px;
            font-size: 12px;
            color: #333;
          }
          .dropdown-menu{
            font-size: 14px;
          }
        }
      }
    }
  }
  .compare-block{
    padding: 20px;
    margin-bottom: 50px;
    position: relative;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 4px rgba(0,0,0,.1);
    h2{
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #eee;
      font-size: 19px;
    }
    &__preview{
      ul{
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 14px;
        color: #666;
        p{
          margin-bottom: 10px;
        }
      }
    }
    &__list{
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
    }
    &__item{
      border: 1px solid $pinkMain;
      padding: 10px;
      border-radius: 5px;
      margin-right: 15px;
      margin-bottom: 20px;
      width: calc(25% - 15px);
      &--empty-dashed{
        padding: 10px;
        margin-bottom: 20px;
        border: 2px dashed $pinkMain;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        text-align: center;
        color: $pinkMain;
      }
      h3{
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 15px;
        color: $pinkMain;
        text-decoration: underline;
        text-align: center;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
      }
      &-wrap{
        display: flex;
      }
      &-chart{
        position: relative;
        width: 100%;
        .chart-sm{
          margin: 0 auto;
          width: 150px;
          height: 150px;
          position: relative;
          &__chart{
            height: 100%;
            #doughnut-chart{
              position: relative;
              z-index: 3;
            }
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
          &__chart-legend{
            margin-top: 15px;
            font-size: 14px;
            text-align: center;
            color: #777;
            ul{
              padding: 0;
              margin: 10px 0 0;
              list-style: none;
              li{
                padding: 3px 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #fff;
                border-radius: 6px;
                margin-bottom: 5px;
                font-size: 13px;
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
                  color: #333;
                }
                p{
                  margin: 0;
                }
              }
            }
            
          }
        }
        .delete{
          border: 1px dashed #ccc;
          text-align: center;
          font-size: 13px;
          padding: 3px;
          border-radius: 4px;
          cursor: pointer;
          &:hover{
            background: #f1f1f1;
          }
        }
      }
    }
    &__close-icon{
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 4px;
      font-size: 20px;
      border-bottom-left-radius: 5px;
      cursor: pointer;
      color: #fff;
      background: $pinkMain;
    }
  }
}
</style>