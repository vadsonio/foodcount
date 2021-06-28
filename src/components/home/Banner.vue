<template>
  <section class="banner-main">
    <div class="container">
      <div class="banner-main__text">
        <h1 class="banner-main__title mb-4">
          FoodCount - ваш помощник в сфере правильного и сбалансированного питания! 
        </h1>
        <p class="banner-main__subtitle mb-5">
          Наша главная задача заключается в том, чтобы помочь Вам узнать о пищевой ценности потребляемых вами продуктов. 
          Правильно подходить к своему завтраку, обеду и ужину.
        </p>
        <a href="#featuresList" class="banner-main__more-btn" v-smooth-scroll>
          Подробнее
        </a>
        <a href="#featuresList" class="banner-main__chevron-down" v-smooth-scroll>
          <b-icon icon="chevron-down"></b-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: "Banner",
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss">
.banner-main{
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../../assets/banner-main_bg.png');
  border-bottom: 2px solid rgba(0,0,0,.06);
  @media (max-width: map-get($grid-breakpoints, md)) {
    background-image: none;
  }
  &__wrap{
    display: flex;
    height: 100%;
  }
  .container{
    height: 100%;
  }
  &__text{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: map-get($grid-breakpoints, md)) {
      width: 100%;
      text-align: center;
    }
  }
  &__title{
    font-weight: 700;
    opacity: 0;
    animation: fadeInBannerText 2s;
    animation-fill-mode: forwards;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      font-size: 28px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 667px) {
      font-size: 30px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 736px) {
      font-size: 34px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 812px) {
      font-size: 36px;
    }
  }
  &__subtitle{
    color: #666;
    opacity: 0;
    animation: fadeInBannerText 2s;
    animation-delay: .4s;
    animation-fill-mode: forwards;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      font-size: 14px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 667px) {
      font-size: 18px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 736px) {
      font-size: 18px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 812px) {
      font-size: 20px;
    }
  }
  &__more-btn{
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    color: #333;
    background: $yellowMain;
    opacity: 0;
    animation: fadeInBannerText 2s;
    animation-delay: .6s;
    animation-fill-mode: forwards;
    &:hover{
      text-decoration: none;
      color: #333;
      background: lighten($yellowMain, 10%);
    }
    &:active{
      opacity: .7;
    }
    @media (max-width: map-get($grid-breakpoints, sm)) {
      margin: 0 auto;
      font-size: 16px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 667px) {
      font-size: 20px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 736px) {
      font-size: 22px;
    }
    @media screen and (max-width: map-get($grid-breakpoints, sm)) and (device-height: 812px) {
      font-size: 24px;
    }
  }
  &__chevron-down{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    border: none;
    color: $pinkMain;
    background: transparent;
    animation: bouncingChevronDown 3s infinite;
    &:hover{
      color: $pinkMain;
      opacity: .8;
    }
    @media (max-width: map-get($grid-breakpoints, sm)) {
      display: none;
    }
    @keyframes bouncingChevronDown {
      from{
        opacity: 0;
        transform: translateY(-15px);
      }
      to{
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  @keyframes fadeInBannerText {
    from{
      opacity: 0;
      transform: translateX(-20px);
    }
    to{
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>