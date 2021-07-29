<template>
  <aside class="aside" :class="{'aside--collapse-on-mobile': showOnMobile === true}">
    
    <div class="aside__mobile-show-btn" :class="{'aside__mobile-show-btn--rotate-left': showOnMobile === true}" @click="collapseOnMobile">
      <b-icon icon="chevron-right"></b-icon>
    </div>
    <div class="aside__mobile-overlay"></div>

    <div class="aside__sections">

      <div class="aside__search">
        <b-form-input v-model="searchQuery" placeholder="Поиск"></b-form-input>
      </div>

      <div class="aside__section">
        <p class="aside__section-heading">
          Показать статьи
        </p>
        <ul class="aside__section-list">
          <li class="aside__section-item">
            <button class="aside__section-btn" :class="{ active: activeTab === 'all'}" @click="switchActiveTab('all')"><b-icon icon="journals"></b-icon>Все</button>
          </li>
          <li class="aside__section-item">
            <button class="aside__section-btn" :class="{ active: activeTab === 'last'}" @click="switchActiveTab('last')"><b-icon icon="alarm"></b-icon>Последние</button>
          </li>
          <li class="aside__section-item">
            <button class="aside__section-btn" :class="{ active: activeTab === 'best'}" @click="switchActiveTab('best')"><b-icon icon="star"></b-icon>Лучшие</button>
          </li>
        </ul>
      </div>

      <div class="aside__section">
        <p class="aside__section-heading">
          Популярные теги
        </p>
        <ul class="aside__section-list aside__section-list--flex">
          <li class="aside__section-item">
            <a href="" class="aside__section-tag">Еда</a>
          </li>
          <li class="aside__section-item">
            <a href="" class="aside__section-tag">Йога</a>
          </li>
          <li class="aside__section-item">
            <a href="" class="aside__section-tag">Упражнения</a>
          </li>
          <li class="aside__section-item">
            <a href="" class="aside__section-tag">Кардио</a>
          </li>
          <li class="aside__section-item">
            <a href="" class="aside__section-tag">Рецепты</a>
          </li>
        </ul>
      </div>

    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Aside',
  data(){
    return{
      searchQuery: '',
      activeTab: 'all',
      showOnMobile: false
    }
  },
  methods: {
    ...mapActions(['toggleMobOverlay']),
    switchActiveTab(tabName){
      this.activeTab = tabName
    },
    collapseOnMobile(){
      this.showOnMobile = !this.showOnMobile;
      this.showOnMobile ? this.toggleMobOverlay(true) : this.toggleMobOverlay(false);
      this.showOnMobile ? document.body.classList.add('fixed') : document.body.classList.remove('fixed');
    }
  }
}
</script>

<style lang="scss" scoped>
.aside{
  position: relative;
  padding: 20px;
  width: 300px;
  top: 0;
  bottom: 0;
  left: 0;
  flex-shrink: 0;
  border-right: 2px solid rgba(0, 0, 0, 0.06);
  transition: .3s;
  background: #fff;
  z-index: map-get($z-index, aside);
  &--collapse-on-mobile{
    transform: translateX(0px)!important;
  }
  @media (max-width: map-get($grid-breakpoints, md)) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    min-height: 100vh;
    padding: 80px 20px 20px;
    transform: translateX(-300px);
  }
  &__mobile-show-btn{
    display: none;
    position: fixed;
    margin-bottom: 10px;
    bottom: 60px;
    right: -49px;
    width: 50px;
    height: 60px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    font-size: 35px;
    align-items: center;
    justify-content: center;
    color: #FF3D87;
    background: #fff;
    border: 2px solid rgba(0, 0, 0, 0.06);
    border-left: none;
    @media (max-width: map-get($grid-breakpoints, md)) {
      display: flex;
    }
    .b-icon.bi{
      transition: .3s;
    }
    &--rotate-left{
      .b-icon.bi{
        transform: rotateZ(180deg);
      }
    }
  }
  &__sections{
    position: fixed;
    position: sticky;
    top: 70px;
    height: 100vh;
    overflow: auto;
  }
  &__search{
    margin-bottom: 30px;
    input{
      font-size: 14px;
    }
  }
  &__section{
    margin-bottom: 30px;
  }
  &__section-heading{
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #b3b3b3;
  }
  &__section-list{
    padding: 0;
    margin: 0;
    list-style: none;
    &--flex{
      display: flex;
      flex-wrap: wrap;
    }
  }
  &__section-btn{
    padding: 10px;
    display: block;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    width: 100%;
    text-align: left;
    border: none;
    border-radius: 10px;
    color: #333;
    background: transparent;
    &.active{
      color: #FF3D87;
      background: #f3f3f3;
    }
    &:hover{
      text-decoration: none;
      color: lighten(#FF3D87, 10%);
      svg{
        margin-right: 15px;
      }
    }
    svg{
      margin-right: 10px;
      transition: .3s;
    }
  }
  &__section-tag{
    padding: 3px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
    font-size: 14px;
    border-radius: 5px;
    color: #fff;
    background: #FF3D87;
    &:hover{
      opacity: .8;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>