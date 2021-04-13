<template>
  <section class="our-purpose" :class="{'animation-enabled': scrollEnable}" ref="ourPurpose">
    <div class="container">
      <h2 class="our-purpose__heading text-center">
        Наша цель
      </h2>
      <div class="our-purpose__wrap">
        <div class="our-purpose__img">
          <img src="../../assets/our_purpose-img.png" alt="our_purpose-img">
          <div class="our-purpose__img-overlay">
            <span class="our-purpose__img-title">
              Наша цель
            </span>
            <p class="our-purpose__img-subtitle">
              помочь Вам относиться к каждому приему пищи с новым подходом. 
            </p>
          </div>
        </div>
        <div class="our-purpose__text">
          <p class="our-purpose__text-logo">
            FoodCount
          </p>
          <p>
            Мы очень редко следим за тем, как и какую еду употребляем. Это все сказывается на нашем здоровье и весе. Мы подготовили для Вас площадку, на которой 
            будем освещать вопросы, связанные с темой здорового и правильного питания. Здесь Вы сможете найти полезные статьи, наполняющийся список продуктов с пищевой
            ценностью и калькулятор расчета потребляемых каллорий.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurPurpose',
  props: ['scrollPosMain'],
  data(){
    return{
      scrollEnable: false,
      scrollPos: null
    }
  },
  methods:{
    handleSCroll(){
      if(this.scrollPosMain - this.scrollPos > -200){
        this.scrollEnable = true;
      }
    }
  },
  mounted(){
    const top = this.$refs.ourPurpose.offsetTop;
    this.scrollPos = top;
  },
  created () {
    window.addEventListener('scroll', this.handleSCroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll);
  } 
}
</script>

<style lang="scss">
  .our-purpose{
    padding: 60px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    &__heading{
      margin-bottom: 40px;
    }
    &__wrap{
      display: flex;
      @media (max-width: 600px) {
        flex-direction: column-reverse;
      }
    }
    &__img{
      width: 50%;
      height: auto;
      position: relative;
      text-align: center;
      opacity: 0;
      @media (max-width: 600px) {
        width: 100%;
      }
      img{
        text-align: center;
        width: 350px;
        height: auto;
      }
      &-overlay{
        position: absolute;
        left: 40px;
        bottom: 40px;
        padding: 20px;
        width: 250px;
        height: 200px;
        border-radius: 10px;
        text-align: left;
        color: #fff;
        background: #FF3D87;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, .1);
        opacity: 0;
      }
      &-title{
        text-transform: uppercase;
        font-weight: 800;
        font-size: 18px;
        display: inline-block;
        margin-bottom: 10px;
      }
      &-subtitle{
        font-size: 14px;
        line-height: 20px;
      }
    }
    &__text{
      width: 50%;
      opacity: 0;
      @media (max-width: 600px) {
        width: 100%;
      }
      &-logo{
        font-size: 40px;
        font-weight: 700;
      }
    }
    &.animation-enabled{
      .our-purpose__img{
        animation: fadeInOurPurposeImg .5s;
        animation-fill-mode: forwards;
        @keyframes fadeInOurPurposeImg {
          from{
            opacity: 0;
            transform: translateX(-20px);
          }
          to{
            opacity: 1;
            transform: translateX(0);
          }
        }
        &-overlay{
          animation: fadeInOurPurposeImgOverlay .5s;
          animation-fill-mode: forwards;
          animation-delay: .7s;
          @keyframes fadeInOurPurposeImgOverlay {
            from{
              opacity: 0;
              transform: translateY(30px);
            }
            to{
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      }
      .our-purpose__text{
        animation: fadeInOurPurposeText .5s;
        animation-fill-mode: forwards;
        @keyframes fadeInOurPurposeText {
          from{
            opacity: 0;
            transform: translateX(20px);
          }
          to{
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
</style>