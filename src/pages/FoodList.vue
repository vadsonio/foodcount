<template>
  <section class="food-list">
    <div class="container">
      <div class="food-list__search">
        <p class="food-list__search-head">Название продукта:</p>
        <b-form-input 
          v-model="searchQuery" 
          class="food-list__search-input" 
          placeholder="Введите название продукта" 
          type="search"></b-form-input>
      </div>

      
      <div class="compare-block" ref="compareBlock" id="compareBlock">
        
        <div class="compare-block__heading" :class="{'compare-block__heading--expanded' : compareBlockPreview}" @click="compareBlockPreview = !compareBlockPreview">
          <h2>Таблица сравнений</h2>
          <span class="compare-cart">{{compareList.length}} шт.</span>
        </div>

        <div class="compare-block__preview" v-if="compareList.length === 0 && compareBlockPreview">
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

        <div class="compare-block__wrap" v-if="compareList.length !== 0 && compareBlockPreview">

          <div v-if="isMobile">
            <CompareBlockDetailesMobile :compareArray="compareList"/>
          </div>
          <div v-else>
            <CompareBlockDetailes :compareArray="compareList" @deleteItem="deleteFromCompareList"/>
          </div>
          
        </div>

        <span 
          class="compare-block__close-icon" 
          :class="{'compare-block__close-icon--expanded' : compareBlockPreview}"
          @click="compareBlockPreview = !compareBlockPreview">
          <b-icon icon="chevron-down"></b-icon>
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
                <div class="food-list__table-item-name-wrap">
                  {{subItem.name}}

                  <div class="food-list__table-item-name-sizes">
                    <span class="item-size-before-tag" v-if="subItem.sizes">Выберите вес:</span>  
                    <div class="item-size-tag-wrap" v-for="subItemSize in subItem.sizes" :key="subItemSize.label" @click="subItem.weight = subItemSize.weight">
                      <span class="item-size-tag" :class="(subItem.weight === subItemSize.weight) ? 'active' : ''">
                        {{subItemSize.label}}
                      </span>
                    </div>
                  </div>

                  <b-dropdown size="sm" :id="`dropdown-${index}`"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                      <b-icon icon="three-dots-vertical"></b-icon>
                      <span class="sr-only">Search</span>
                    </template>
                    <!-- <b-dropdown-item 
                      @click="addToCompare(subItem)" 
                      v-scroll-to="{
                        el: '#compareBlock',
                        offset: -100  
                      }">Добавить в сравнение</b-dropdown-item> -->
                      <b-dropdown-item @click="addToCompare(subItem)">Добавить в сравнение</b-dropdown-item>
                  </b-dropdown>
                </div>
                
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

    <div class="popup-info" :class="{'show': popup.show}">
      <p class="popup-info__heading">
        Элемент был добавлен в сравнение:
      </p>
      <p class="popup-info__text">
        {{popup.text}}
      </p>
    </div>

    <div class="popup-top" :class="{'show': showPopupToTop}" @click="scrollToTop">
      <span class="popup-top__icon">
        <b-icon icon="arrow-up"></b-icon>
      </span>
      <span class="popup-top__text">
        Наверх
      </span>
    </div>
  </section>
</template>

<script>
import FList from '../apiDummyList/food_list.json';

import CompareBlockDetailes from '../components/food/CompareBlockDetailes.vue';
import CompareBlockDetailesMobile from '../components/food/CompareBlockDetailesMobile.vue';

import { isMobile } from 'mobile-device-detect';

export default {
  name: "FoodList",
  components: {
    CompareBlockDetailes,
    CompareBlockDetailesMobile
  },
  data(){
    return{
      searchQuery: '',
      foodlist: [],
      compareBlockPreview: true,
      compareList: [],
      isMobile: isMobile,
      popup: {
        show: false,
        text: ''
      },
      showPopupToTop: false
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
      this.compareList.push(newCompareItem);

      this.popupInit(name);
    },
    popupInit(text){
      this.popup = {
        show: true,
        text
      }
      setTimeout(()=> this.popup={show: false, text:""}, 3000)
    },
    deleteFromCompareList(itemIndex){
      this.compareList = this.compareList.filter(item => item.id !== itemIndex);
    },
    initPopupScrollToTop(){
      let top  = window.pageYOffset || document.documentElement.scrollTop;

      if(top > 500){
        this.showPopupToTop = true; 
      } else {
        this.showPopupToTop = false; 
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.initPopupScrollToTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.initPopupScrollToTop);
  }
}
</script>

<style lang="scss">
.food-list{
  padding-top: 50px;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
  background: url('../assets/foodlist_bg.png');
  background-attachment: fixed;
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
    background: #fff;
    @media (max-width: map-get($grid-breakpoints, md)) {
      padding: 20px;
      height: auto;
      flex-direction: column;
    }
    &-head{
      margin-right: 20px;
      margin-bottom: 0;
      font-size: 30px;
      font-weight: 900;
      flex-shrink: 0;
      align-self: center;
      @media (max-width: map-get($grid-breakpoints, lg)) {
        font-size: 22px;
      }
      @media (max-width: map-get($grid-breakpoints, md)) {
        padding: 0;
        margin-bottom: 10px;
        font-size: 18px;
        align-self: flex-start;
      }
    }
    &-input{
      padding: 20px;
      height: 80px;
      font-size: 30px;
      line-height: 1;
      border: none;
      font-weight: 700;
      &.form-control:focus{
        outline: none;
        border-color: none;
        box-shadow: none;
      }
      @media (max-width: map-get($grid-breakpoints, lg)) {
        font-size: 22px;
      }
      @media (max-width: map-get($grid-breakpoints, md)) {
        padding: 0;
        font-size: 18px;
        height: auto;
      }
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
      font-weight: 500;
    }
    table{
      width: 100%;
      position: relative;
      border-collapse: collapse;
      border: 1px solid #eee;
      background: #fff;
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
    &-item-name-wrap{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &-item-name-sizes{
      order: 3;
      width: 100%;
      .item-size-before-tag{
        font-size: 12px;
        font-weight: 400;
        margin-right: 20px;
        color: #919191;
      }
      .item-size-tag-wrap{
        display: inline-block;
      }
      .item-size-tag{
        padding: 2px 5px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: inherit;
        border-radius: 4px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, .2);
        transition: .3s;
        cursor: pointer;
        background: #F7D840;
        &.active{
          color: #fff;
          background: $pinkMain;
        }
        &:hover{
          box-shadow: 0px 0px 3px rgba(0, 0, 0, .4);
        }
        &:active{
          background: #f1d43f;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, .6);
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
    background: #fff;
    &__heading{
      cursor: pointer;
      user-select: none;
      h2{
        margin: 0;
        margin-right: 15px;
        float: left;
        font-size: 19px;
        @media (max-width: map-get($grid-breakpoints, md)) {
          padding-top: 2px;
          font-weight: 400;
        }
      }
      &--expanded{
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #eee;
      }
      .compare-cart{
        padding: 2px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 700;
        background: #F7D840;
      }
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
      top: 18px;
      right: 20px;
      padding: 0 5px;
      font-size: 20px;
      cursor: pointer;
      user-select: none;
      transition: .3s;
      color: #888;
      &--expanded{
        transform: rotate(180deg);
      }
    }
  }
  .popup-info{
    position: fixed;
    bottom: -100%;
    right: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 4;
    transition: .5s;
    color: #fff;
    background: #273036;
    &.show{
      bottom: 10px;
    }
    &__heading{
      font-weight: 600;
      margin-bottom: 10px;
    }
    &__text{
      margin: 0;
      font-size: 14px;
      font-weight: 100;
    }
  }
  .popup-top{
    visibility: hidden;
    position: fixed;
    bottom: -100%;
    right: 10px;
    z-index: 4;
    border-radius: 4px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
    cursor: pointer;
    transition: .3s;
    color: #fff;
    background: $pinkMain;
    &.show{
      visibility: visible;
      bottom: 10px;
    }
    &__icon{
      padding: 6px 10px;
      display: inline-block;
      border-right: 1px solid #fff;
    }
    &__text{
      display: inline-block;
      padding: 0 10px;
      font-size: 14px;
    }
  }
}
</style>