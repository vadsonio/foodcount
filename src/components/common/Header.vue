<template>
  <div class="header">
    <div class="container">
      <div class="header__wrap">
        <a href="#" class="header__logo">
          <img src="../../assets/logo.png" alt="logo">
        </a>
        <nav class="header__nav" :class="{'header__nav--mobile': showMobile}">
          <span class="header__nav--mobile-close" :class="{active: showMobile}" @click="hideMobileMenu">✕</span>
          <router-link class="header__nav-link" :to="{ path: '/' }" exact-path>Главная</router-link>
          <router-link class="header__nav-link" :to="{ path: '/articles' }" exact>Статьи</router-link>
          <router-link class="header__nav-link" :to="{ path: '/foodList' }" exact>Список продуктов<b-icon icon="list-stars"></b-icon></router-link>
          <a href="#" class="header__nav-link">Считать каллории<b-icon icon="calculator-fill"></b-icon></a>
          <a href="#" class="header__nav-link login-btn">Войти</a>
        </nav>
        <button class="header__mobile-menu-btn" @click="showMobileMenu">
          <b-icon icon="three-dots-vertical"></b-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Header',
  data() {
    return{
      showMobile: false
    }
  },
  methods: {
    showMobileMenu(){
      this.showMobile = true;
      document.body.classList.add('fixed');
    },
    hideMobileMenu(){
      this.showMobile = false;
      document.body.classList.remove('fixed');
    }
  },
  watch: {
    '$route' () {
      this.showMobile = false;
      document.body.classList.remove('fixed');
    }
  }
}
</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 50%);
    background: $pinkMain;
    z-index: map-get($z-index, header);
    .container{
      height: 100%;
    }
    &__wrap{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
    &__logo{
      height: 100%;
      padding: 10px 0;
      img{
        height: 20px;
        width: auto;
      }
    }
    &__nav{
      &-link{
        margin-right: 12px;
        padding-right: 12px;
        display: inline-block;
        position: relative;
        border-right: 1px solid rgba(255,255,255,.4);
        color: #fff;  
        &:last-child{
          margin: 0;
          padding: 0;
          margin: 0;
          border-right: none;
        }
        &:hover{
          text-decoration: none;
          opacity: .8;
          color: #fff;
        }
        &:active{
          opacity: .7;
        }
        .b-icon.bi{
          margin-left: 5px;
          vertical-align: middle;
        }
        &.router-link-active:after{
          content: '';
          display: block;
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: #fff;
          opacity: 0;
          animation: fadeInLinkAfter .3s;
          animation-fill-mode: forwards;
          @keyframes fadeInLinkAfter {
            from{
              width: 0;
              opacity: 0;
            }
            to{
              width: 25px;
              opacity: 1;
            }
          }
        }
        &.login-btn{
          padding: 2px 20px;
          border-radius: 4px;
          font-weight: 600;
          color: #FF3D87;
          background: #fff;
        }
        
      }
      @media (max-width: map-get($grid-breakpoints, lg)) {
        display: none;
      }
      &--mobile{
        display: block;
        padding: 70px 50px 20px 30px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        min-height: 100vh;
        width: 100%;
        transition: .3s;
        color: #333;
        background: #fff;
        animation: fadeInMobileMenu .6s;
        @keyframes fadeInMobileMenu {
          from{
            opacity: 0;
            transform: translateX(-15px);
          }
          to{
            opacity: 1;
            transform: translateX(0);
          }
        }
        .header__nav-link{
          display: block;
          padding: 0 0 20px;
          border-bottom: 1px solid rgba(0,0,0,.2);
          margin: 0 0 20px;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: flex-end;
          font-size: 20px;
          color: #333;
          svg{
            margin-right: 15px;
          }
          @media (max-width: map-get($grid-breakpoints, sm)) {
            font-size: 16px;
          }
        }
        &-close{
          display: none;
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 24px;
          &.active{
            display: block;
          }
        }
      }
    }
    &__mobile-menu-btn{
      display: none;
      height: 40px;
      width: 40px;
      font-size: 25px;
      border: none;
      background: none;
      color: #fff;
      @media (max-width: map-get($grid-breakpoints, lg)){
        display: block;
      }
    }
  }
</style>