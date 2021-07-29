<template>
  <main class="kcal-main-calculator">
    <div class="kcal-main-calculator__heading">
      <h1>
        Расчет Ккал вашего приёма пищи
      </h1>
      <h2>
        Посчитайте калорийность вашего завтрака/обеда/ужина.  
      </h2>
    </div>
    
    <div class="kcal-main-calculator__sections-wrap">
      <section class="kcal-main-calculator__left-section" @drop='onDrop($event, 1)' @dragover.prevent @dragenter.prevent>
        <h3>
          Выберите из списка любой из продуктов и перетяните его в правое окно.
        </h3>
        <div class="kcal-main-calculator__left-section-body">
          <b-form-input v-model="searchQuery" placeholder="Введите название"></b-form-input>
          <div class="products-list">
            <ul>
              <li v-for="item in listOne" :key="item.id" draggable @dragstart='startDrag($event, item)'>
                {{item.name}}
                <b-icon icon="arrows-move"></b-icon>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="kcal-main-calculator__right-section" :class="{active: itemOnDrag}" @drop='onDrop($event, 2)' @dragover.prevent @dragenter.prevent>
        <ul>
          <li v-for="item in listTwo" :key="item.id" draggable @dragstart='startDrag($event, item)'>
            {{item.name}}
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import FList from '../../apiDummyList/food_list.json';

export default {
  name: "FoodDailyCalculator",
  data(){
    return{
      searchQuery: "",
      foodListWithCategories: [],
      productsOnly: [],
      itemOnDrag: false
    }
  },
  mounted(){
    this.foodListWithCategories = FList;
    this.setOnlyProducts();
  },
  computed:{
    listOne(){
      return this.productsOnly.filter(item => item.list === 1).filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    listTwo(){
      return this.productsOnly.filter(item => item.list === 2);
    }
  },
  methods:{
    setOnlyProducts(){
      let productsList = this.foodListWithCategories.map(item => item.list),
          productsListConcated = [].concat(...productsList);
          productsListConcated.forEach(item => item.list = 1);
      this.productsOnly = productsListConcated;
    },
    startDrag(evt, item){
      this.itemOnDrag = true
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop (evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      this.productsOnly = this.productsOnly.map(item => item.id === itemID ? {...item, list} : item)
      this.itemOnDrag = false
    }
  }
}
</script>

<style lang="scss">
.kcal-main-calculator{
  width: 100%;
  padding: 15px 50px 0;
  &__heading{
    margin-bottom: 40px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e9e9e9;
    h1{
      color: #333;
      font-size: 27px;
      font-weight: 700;
    }
    h2{
      font-size: 16px;
      font-weight: 400;
      color: #9b9b9b;
    }
  }
  &__sections-wrap{
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  &__left-section,
  &__right-section{
    padding: 10px;
    border-radius: 6px;
    border: 2px solid transparent;
    box-shadow: 0px 0px 2px rgba(0,0,0,.3);
    background: #fcfcfc;
    h3{
      padding-bottom: 8px;
      font-size: 14px;
      color: #666;
      font-weight: 400;
      border-bottom: 1px solid #ebebeb;
    }
  }
  &__right-section{
    &.active{
      border: 2px solid #FF3D87;
    }
  }
  &__left-section-body{
    input[type="text"]{
      margin-bottom: 15px;
    }
    .products-list{
      padding: 0.375rem 0.75rem;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      height: 300px;
      overflow: auto;
      background: #fff;
      ul{
        padding: 0;
        margin: 0;
        list-style: none;
      }
      li{
        margin-bottom: 5px;
        padding: 6px;
        padding-right: 15px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        color: #333;
        background: #fff;
        border: 1px solid #e5e5e5;
        box-shadow: 1px 1px 2px rgba(0,0,0,.35);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 3px solid #FF3D87;
        transition: .3s;
        .b-icon{
          display: none;
        }
        &:hover{
          .b-icon{
            display: block;
          }
          transform: translateX(-5px);
        }
        &:active{
          border: 1px dashed #c8c8c8;
          background: #ededed;
          color: #b2b2b2;
        }
      }
    }
  }
}
</style>