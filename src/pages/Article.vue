<template>
  <article class="article-main">
    <div class="container">
      <div class="article-main__banner">
        <div class="article-main__banner-text">
          <span class="article-main__banner-category">
            Полезная еда
          </span>
          <h1 class="article-main__banner-title">
            Мы то, что едим: какая еда полезная, а какая вредная?
          </h1>
          <p class="article-main__banner-description">
            Медики выявили продукты, из-за которых человек может чувствовать утомляемость. Часто причиной тому может быть вовсе не нехватка сна, а неправильный рацион, составленный из продуктов, забирающих энергию.
          </p>
          <time class="article-main__banner-time">
            14.07.2021
          </time>
        </div>
        <div class="article-main__banner-image">
          <img :src="bannerURL" alt="image">
        </div>
      </div>

      <div class="article-main__text-part">
        <aside class="article-main__aside">
          <ul class="aside-socials__list">
            <li class="aside-socials__item">
              <a href="" class="aside-socials__link">
                <b-icon icon="eye"></b-icon>
                <span>0</span>
              </a>
            </li>
            <li class="aside-socials__item">
              <a href="" class="aside-socials__link">
                <b-icon icon="heart"></b-icon>
                <span>0</span>
              </a>
            </li>
            <li class="aside-socials__item">
              <a href="" class="aside-socials__link">
                <svg 
                  id="Bold" 
                  enable-background="new 0 0 24 24" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  width="18" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#909090">
                  <path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                </svg>
              </a>
            </li>
            <li class="aside-socials__item">
              <a href="" class="aside-socials__link">
                <svg 
                  id="Bold" 
                  enable-background="new 0 0 24 24" 
                  height="15" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#909090">
                  <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"/>
                  <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/>
                  <circle cx="18.406" cy="5.595" r="1.439"/>
                </svg>
              </a>
            </li>
            <li class="aside-socials__item">
              <a href="" class="aside-socials__link">
                <svg 
                  id="Bold" 
                  enable-background="new 0 0 24 24" 
                  height="15" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#909090">
                  <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
                </svg>
              </a>
            </li>
          </ul>
        </aside>
        <p class="article-main__text">
          Первое место среди так называемых продуктов "вампиров" выделен белый хлеб (265 ккал на 100 грамм)— это не только батоны и булочки, 
          к ним относятся тосты, круассаны и пицца. Хлеб вредит фигуре и негативно действует на организм. <br><br>
          Iste voluptatem mollitia quidem doloribus ab velit, molestiae nam nisi veniam eos soluta blanditiis magni quibusdam eum! Perferendis 
          assumenda consequatur id aut? Vero ut quidem vel maiores dignissimos sit temporibus commodi itaque natus quisquam molestias, molestiae, 
          exercitationem neque. Itaque asperiores cupiditate error illum voluptatum perspiciatis, officiis corrupti rerum adipisci quod accusantium 
          provident dolor, aperiam culpa ex dolorum neque sint. Nostrum porro sunt iste, voluptatibus laudantium, deleniti deserunt asperiores quidem 
          obcaecati quae facilis est adipisci fugiat incidunt! Molestiae magni exercitationem eligendi delectus fuga!<br><br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dicta facere laborum dolorum. Ab tempore repellat fugit saepe. 
          Iste voluptatem mollitia quidem doloribus ab velit, molestiae nam nisi veniam eos soluta blanditiis magni quibusdam eum! Perferendis 
          assumenda consequatur id aut? Vero ut quidem vel maiores dignissimos sit temporibus commodi itaque natus quisquam molestias, molestiae, 
          exercitationem neque. Itaque asperiores cupiditate error illum voluptatum perspiciatis, officiis corrupti rerum adipisci quod accusantium 
          provident dolor, aperiam culpa ex dolorum neque sint. Nostrum porro sunt iste, voluptatibus laudantium, deleniti deserunt asperiores quidem 
          obcaecati quae facilis est adipisci fugiat incidunt! Molestiae magni exercitationem eligendi delectus fuga!<br><br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dicta facere laborum dolorum. Ab tempore repellat fugit saepe. 
          Iste voluptatem mollitia quidem doloribus ab velit, molestiae nam nisi veniam eos soluta blanditiis magni quibusdam eum! Perferendis 
          assumenda consequatur id aut? Vero ut quidem vel maiores dignissimos sit temporibus commodi itaque natus quisquam molestias, molestiae, 
          exercitationem neque. Itaque asperiores cupiditate error illum voluptatum perspiciatis, officiis corrupti rerum adipisci quod accusantium 
          provident dolor, aperiam culpa ex dolorum neque sint. Nostrum porro sunt iste, voluptatibus laudantium, deleniti deserunt asperiores quidem 
          obcaecati quae facilis est adipisci fugiat incidunt! Molestiae magni exercitationem eligendi delectus fuga!<br><br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dicta facere laborum dolorum. Ab tempore repellat fugit saepe. 
          Iste voluptatem mollitia quidem doloribus ab velit, molestiae nam nisi veniam eos soluta blanditiis magni quibusdam eum! Perferendis 
          assumenda consequatur id aut? Vero ut quidem vel maiores dignissimos sit temporibus commodi itaque natus quisquam molestias, molestiae, 
          exercitationem neque. Itaque asperiores cupiditate error illum voluptatum perspiciatis, officiis corrupti rerum adipisci quod accusantium 
          provident dolor, aperiam culpa ex dolorum neque sint. Nostrum porro sunt iste, voluptatibus laudantium, deleniti deserunt asperiores quidem 
          obcaecati quae facilis est adipisci fugiat incidunt! Molestiae magni exercitationem eligendi delectus fuga!<br><br>
        </p>
      </div>
    </div>
    
  </article>
</template>

<script>
export default {
  name: "Article",
  data(){
    return{
      bannerURL: 'https://mydario.com/wp-content/uploads/2018/05/shutterstock_264191096.jpg'
    }
  }
}
</script>

<style lang="scss">
.article-main{
  padding: 50px 0 0;
  &__banner{
    margin-bottom: 50px;
    padding-bottom: 50px;
    border-bottom: 10px solid #F7F7F7;
    display: flex;
    height: 100%;
    min-height: 500px;
    &-text{
      margin-right: 20px;
      width: calc(50% - 20px);
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 5% 0;
    }
    &-title{
      margin-bottom: 25px;
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
      color: #031b4e;
    }
    &-description{
      font-size: 16px;
      color: #666;
    }
    &-time{
      padding: 5px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 700;
      color: #031b4e;
      border: 1px solid #FF3D87;
      border-radius: 5px;
    }
    &-category{
      padding: 5px 10px;
      margin-bottom: 15px;
      display: inline-block;
      font-size: 16px;
      font-weight: 700;
      border-radius: 0 5px 5px 0;
      color: #fff;
      background: #FF3D87;
    }
    &-image{
      width: 50%;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
      border-radius: 0 0 10px 10px;
      img{
        width: auto;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
  &__text-part{
    display: flex;
    align-items: flex-start;
  }
  &__aside{
    position: sticky;
    top: 60px;
    width: 200px;
    flex-shrink: 0;
  }
  &__text{
    font-size: 18px;
    line-height: 30px;
    padding: 20px;
    background: #F7F7F7;
    &::first-letter{
      font-size: 30px;
      font-weight: 800;
    }
  }
  .aside-socials{
    &__list{
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
      font-size: 16px;
    }
    &__item{
      margin-bottom: 15px;
    }
    &__link{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #909090;
      &:hover{
        text-decoration: none;
      }
      svg{
        margin-right: 5px;
      }
      span{
        font-size: 14px;
      }
    }
  }
}
</style>