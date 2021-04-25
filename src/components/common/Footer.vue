<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <router-link class="footer__logo" :to="{ path: '/' }" exact-path>
            <img src="../../assets/logo.png" class="footer__logo-img" alt="logo">
          </router-link>

          <div class="footer__socials">
            <p class="footer__category-heading">
              Подпишитесь на нас
            </p>
            <ul class="socials-list">
              <li class="socials-list__item">
                <a href="" class="socials-list__link vk">
                  <svg 
                    id="Bold" 
                    enable-background="new 0 0 24 24" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    width="18" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF3D87">
                    <path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                  </svg>
                </a>
              </li>
              <li class="socials-list__item">
                <a href="" class="socials-list__link insta">
                  <svg 
                    id="Bold" 
                    enable-background="new 0 0 24 24" 
                    height="15" 
                    viewBox="0 0 24 24" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF3D87">
                    <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"/>
                    <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/>
                    <circle cx="18.406" cy="5.595" r="1.439"/>
                  </svg>
                </a>
              </li>
              <li class="socials-list__item">
                <a href="" class="socials-list__link facebook">
                  <svg 
                    id="Bold" 
                    enable-background="new 0 0 24 24" 
                    height="15" 
                    viewBox="0 0 24 24" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF3D87">
                    <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          
          <p class="footer__year">
            FoodCount © 2021
          </p>
        </div>
        <div class="col-12 col-md-9">
          <div class="row">
            <div class="col-12 col-md-3 mb-3 mb-md-0">
              <p class="footer__category-heading">
                Разделы
              </p>
              <ul class="footer__category-list">
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/' }" exact-path>Главная</router-link>
                </li>
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/articles' }" exact>Статьи</router-link>
                </li>
                <li class="footer__category-item">
                  <a href="" class="footer__category-link">Список продуктов</a>
                </li>
                <li class="footer__category-item">
                  <a href="" class="footer__category-link">Калькулятор</a>
                </li>
                <li class="footer__category-item">
                  <a href="" class="footer__category-link">Войти</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-3">
              <p class="footer__category-heading">
                Лучшие статьи
              </p>
              <ul class="footer__category-list">
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/article?1' }" exact-path>Заголовок статьи 1</router-link>
                </li>
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/article?1' }" exact-path>Заголовок статьи 2</router-link>
                </li>
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/article?1' }" exact-path>Заголовок статьи 3</router-link>
                </li>
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/article?1' }" exact-path>Заголовок статьи 4</router-link>
                </li>
                <li class="footer__category-item">
                  <router-link class="footer__category-link" :to="{ path: '/article?1' }" exact-path>Заголовок статьи 5</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer{
  padding: 20px 0;
  position: relative;
  min-height: 220px;
  color: #fff;
  background: #0a0b21; /* Old browsers */
  background: -moz-linear-gradient(left, #0a0b21 0%, #111035 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #0a0b21 0%,#111035 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #0a0b21 0%,#111035 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a0b21', endColorstr='#111035',GradientType=1 ); /* IE6-9 */
  z-index: map-get($z-index, footer);
  &__logo{
    margin-bottom: 40px;
    display: block;
    img{
      width: auto;
      height: 23px;
    }
  }
  &__socials{
    margin-bottom: 25px;
  }
  &__category-heading{
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    @media (max-width: map-get($grid-breakpoints, md)) {
      font-size: 18px;
    }
  }
  .socials-list{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    &__item{
      display: inline-block;
      margin-right: 10px;
    }
    &__link{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: .3s;
      background: #fff;
      &:hover{
        background: #333;
        svg{
          fill: $yellowMain;
        }
      }
      svg{
        display: block;
      }
    }
  }
  &__year{
    margin: 0;
    font-size: 12px;
    opacity: .5;
    @media (max-width: map-get($grid-breakpoints, md)) {
      display: none;
    }
  }
  &__category-list{
    padding: 0;
    margin: 0;
    list-style: none;
    padding-left: 10px;
  }
  &__category-link{
    font-size: 14px;
    color: rgba(255,255,255,.7);
    @media (max-width: map-get($grid-breakpoints, md)) {
      font-size: 16px;
    }
    &.router-link-exact-active{
      font-weight: 500;
      color: #fff;
    }
    &:hover{
      text-decoration: none;
      color: rgba(255,255,255,1);
    }
  }
}
</style>