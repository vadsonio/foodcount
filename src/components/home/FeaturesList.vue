<template>
  <section class="features-list" ref="featuresList" id="featuresList">
    <div class="container">
      <h2 class="features-list__heading text-center">
        Коротко о нас
      </h2>
      <div class="features-list__wrap">
        <div class="features-list__item">
          <img src="../../assets/yoga.svg" class="features-list__item-img" alt="feature-1">
          <h3 class="features-list__item-title">Мы ведем свой Блог. Полезные статьи помогут Вам узнать много нового!</h3>
          <router-link class="features-list__item-btn" :to="{ path: '/articles' }" exact>Статьи</router-link>
        </div>
        <div class="features-list__item">
          <img src="../../assets/diet.svg" class="features-list__item-img" alt="feature-2">
          <h3 class="features-list__item-title">Узнайте о каллорийности и пользе продуктов, которые Вы употребляете!</h3>
          <a href="#" class="features-list__item-btn">Список продуктов</a>
        </div>
        <div class="features-list__item">
          <img src="../../assets/calculator.svg" class="features-list__item-img" alt="feature-3">
          <h3 class="features-list__item-title">Посчитайте Вашу суточную норму ккал и отследите график приемов пищи!</h3>
          <a href="#" class="features-list__item-btn">Считать каллории</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesList'
}
</script>

<style lang="scss">
.features-list{
  padding: 60px 0;
  background: #F9F9F9;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);
  &__heading{
    margin-bottom: 40px;
  }
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 25px;
    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
  &__item{
    padding: 25px 40px;
    border-radius: 15px;
    border: 4px dashed #99999947;
    text-align: center;
    transition: .3s;
    &:hover{
      border: 4px dashed #99999917;
      .features-list__item-img{
        transform: translateY(-5px);
      }
    }
    &-img{
      margin-bottom: 20px;
      width: 35%;
      height: auto;
      transition: .3s;
    }
    &-title{
      margin-bottom: 20px;
      font-size: 16px;
      color: #333;
    }
    &-btn{
      padding: 5px 20px;
      border-radius: 4px;
      font-weight: 600;
      display: inline-block;
      color: #fff;
      background: $pinkMain;
      &:hover{
        text-decoration: none;
        color: #fff;
        opacity: .8;
      }
      &:focus{
        opacity: .7;
      }
    }
    @media (max-width: 770px) {
      padding: 15px 5px;
    }
    @media (max-width: 600px) {
      padding: 25px 30px;
      margin: 0 20px 20px;
    }
  }
}
</style>