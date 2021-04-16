<template>
  <div class="last-news">
    <div class="container">
      <h2 class="last-news__heading text-center">
        Последние новости
      </h2>
      <p class="last-news__subheading text-center">
        Следите за новыми постами, в них вы можете почерпнуть много новой информации!
      </p>
      <VueSlickCarousel v-bind="settings">
        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Диета
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>
          
        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://img.freepik.com/free-photo/front-view-of-female-doctor-with-stethoscope-holding-paper-heart_23-2148635141.jpg?size=626&ext=jpg)' }"></div>
            <h4 class="last-news__article-category">
              Здоровье
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>

        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/healthy-fitness-low-calories-food-oat-raspberry-blueberry-cashew-nuts-compare-to-unhelthy-fat-fast-meat-burger-french-153256382.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Сравним!?
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>

        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Диета
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>

        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Диета
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>

        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Диета
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>

        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Диета
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>

        <a href="#" class="last-news__article">
          <div class="last-news__article-wrap">
            <div class="last-news__article-img" :style="{ backgroundImage: 'url(https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg)' }"></div>
            <h4 class="last-news__article-category">
              Диета
            </h4>
            <h3 class="last-news__article-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum. Labore expedita quibusdam vero ut! Suscipit in et eaque quaerat!
            </h3>
          </div>
        </a>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'LastNews',
  data(){
    return{
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: true,
        responsive: [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2
            }
          }
        ]
      }
    }
  },
  components: { VueSlickCarousel }
}
</script>

<style lang="scss">
  .last-news{
    padding: 60px 0;
    background: #F9F9F9;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    &__heading{
      margin-bottom: 15px;
    }
    &__subheading{
      margin-bottom: 40px;
      font-size: 15px;
      color: #666;
    }
    &__article{
      padding: 10px;
      text-decoration: none;
      &:hover{
        text-decoration: none;
      }
      &-wrap{
        padding: 10px;
        border-radius: 6px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
        background: #fff;
      }
      &-img{
        padding-bottom: 75%;
        margin-bottom: 10px;
        background-position: center;
        background-size: cover;
      }
      &-category{
        display: inline-block;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 12px;
        color: #fff;
        background: $pinkMain;
      }
      &-title{
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
</style>