<template>
  <div class="main">
    <div class="main__overlay" v-if="getOverlayState"></div>
    <div class="main__grid">
      <article class="article" v-for="item in articlesList" :key="item.id">
        <router-link class="article__link" :to="{ path: '/article' }" exact-path>
          <div class="article__img" v-lazy:background-image="item.img"></div>
          <span class="article__category">
            {{item.category}}
          </span>
          <p class="article__title">
            {{item.text}}
          </p>
          <p class="article__description">
            {{item.description}}
          </p>
          <div class="article__options">
            <div class="article__comments">
              <b-icon icon="heart"></b-icon>
              0
            </div>
            <div class="article__likes">
              <b-icon icon="chat"></b-icon>
              0
            </div>
            <div class="article__time">
              <time>
                {{item.time}}
              </time>
            </div>
          </div>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

let dummyList = [
  {
    id: 1,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://medicotripindia.com/assets/img/yoga.jpg",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 2,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://mydario.com/wp-content/uploads/2018/05/shutterstock_264191096.jpg",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 3,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://cdn1.theinertia.com/wp-content/uploads/2016/05/workout-670x388.jpg",
    category: "Упражнения",
    time: "14.07.2021"
  },
  {
    id: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://yogamedicine.com/wp-content/uploads/2019/09/Types-of-Yoga-3.jpg",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://www.lipton.com/content/dam/unilever/lipton_international/global/general_image/worldtea_teatype_ginger_img1_1460x593-1446342-jpg.jpg",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 6,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://m8group.co.uk/wp-content/uploads/2020/12/axminster-web-header.png",
    category: "Упражнения",
    time: "14.07.2021"
  },
  {
    id: 7,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 8,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 9,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 10,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 11,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 12,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 13,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 14,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 15,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 16,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 17,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 18,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 19,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 20,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 21,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 22,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 23,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 24,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 25,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 26,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 27,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 28,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 29,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 30,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 31,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 32,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 33,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 34,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 35,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 36,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PR2ZAzwhWY7orX3aNxJE67X5TaAjAN7H_g&usqp=CAU",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 37,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 38,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 39,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 40,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 41,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  },
  {
    id: 42,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Еда",
    time: "14.07.2021"
  },
  {
    id: 43,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Йога",
    time: "14.07.2021"
  },
  {
    id: 44,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum.",
    img: "https://via.placeholder.com/800x500",
    category: "Кардио",
    time: "14.07.2021"
  }
]

export default {
  name: 'Main',
  data(){
    return{
      articlesList: dummyList
    }
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  mounted(){
    this.scrollToTop();
  },
  computed:{
    ...mapGetters(['getOverlayState'])
  }
}
</script>

<style lang="scss">
.main{
  padding: 20px;
  flex-grow: 1;
  background: #F9F9F9;
  @media (max-width: map-get($grid-breakpoints, sm)) {
    padding: 10px;
  }
  &__overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: rgba(0,0,0,.5);
    z-index: map-get($z-index, overlay);
  }
  &__grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      grid-template-columns: 1fr 1fr;
      grid-gap: .8rem;
    }
  }
  .article{
    padding: 10px;
    position: relative;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, .1);
    border-radius: 15px;
    transition: .3s;
    &:hover{
      box-shadow: 0px 0px 8px rgba(0, 0, 0, .4);
    }
    &:nth-child(11n+1){
      grid-column: 1 / 3;
      display: flex;
      .article__link{
        display: grid;
        grid-template-columns: 60% auto;
        grid-template-rows: auto 1fr auto;
        grid-gap: 1rem;
      }
      .article__img{
        padding-bottom: unset;
        margin: 0;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 4;
        border-radius: 15px;
      }
      .article__title{
        font-size: 20px;
        line-height: 26px;
        height: auto;
        max-height: 130px;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .article__description{
        margin: 0;
        font-size: 16px;
        line-height: 22px;
        height: 110px;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          font-size: 14px;
          line-height: 20px;
          height: 60px;
          -webkit-line-clamp: 3;
        }
      }
      .article__options{
        flex-wrap: wrap;
      }
      .article__comments,
      .article__likes{
        @media (max-width: map-get($grid-breakpoints, sm)){
          margin-bottom: 5px;
        }
      }
      .article__time{
        @media (max-width: map-get($grid-breakpoints, sm)){
          flex-basis: 100%;
        }
      }
    }
    &__link{
      &:hover{
        text-decoration: none;
      }
    }
    &__img{
      position: relative;
      margin-bottom: 10px;
      overflow: hidden;
      padding-bottom: 70%;
      border-radius: 15px 15px 0 0;
      background-position: center;
      background-size: cover;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        padding-bottom: 80%;
      }
    }
    &__category{
      position: absolute;
      top: 25px;
      padding: 3px 10px;
      font-size: 14px;
      border-radius: 0 5px 5px 0;
      color: #fff;
      background: #FF3D87;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        font-size: 12px;
      }
    }
    &__title{
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      height: 60px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        height: 80px;
        -webkit-line-clamp: 4;
      }
    }
    &__description {
      font-size: 14px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #888;
    }
    &__options{
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #666;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        font-size: 12px;
      }
    }
    &__comments{
      margin-right: 10px;
    }
    &__time{
      margin-left: auto;
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>