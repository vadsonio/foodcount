<template>
  <section class="comments">
    <div class="comments__heading">
      <h2>Комментарии (3)</h2>
    </div>
    <div class="comments__avatar-textarea">
      <div class="comments__avatar">
        AD
      </div>
      <b-form-textarea
        id="textarea"
        v-model="userMessage"
        placeholder="Оставьте свой комментарий..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>

    <div class="comments__feed">
      <div class="comments__feed-item">
        <div class="comments__avatar">
          VG
        </div>
        <div class="comments__feed-text">
          <div class="comments__feed-info">
            <p>
              Vladislav Grachev
            </p>
            <span>
              •
            </span>
            <time>
              Ноябрь 15
            </time>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, velit fugit. 
          Voluptatibus rem voluptate repellat debitis similique maxime sed asperiores?
        </div>
      </div>

      <div class="comments__feed-item">
        <div class="comments__avatar">
          VG
        </div>
        <div class="comments__feed-text">
          <div class="comments__feed-info">
            <p>
              Vladislav Grachev
            </p>
            <span>
              •
            </span>
            <time>
              Ноябрь 15
            </time>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, velit fugit. 
          Voluptatibus rem voluptate repellat debitis similique maxime sed asperiores?
        </div>
      </div>

      <div class="comments__feed-item">
        <div class="comments__avatar">
          VG
        </div>
        <div class="comments__feed-text">
          <div class="comments__feed-info">
            <p>
              Vladislav Grachev
            </p>
            <span>
              •
            </span>
            <time>
              Ноябрь 15
            </time>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, velit fugit. 
          Voluptatibus rem voluptate repellat debitis similique maxime sed asperiores?
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "Comments",
  data(){
    return{
      userMessage: ''
    }
  }
}
</script>

<style lang="scss">
.comments{
  &__heading{
    margin-bottom: 20px;
  }
  &__avatar-textarea{
    margin-bottom: 40px;
    display: flex;
    align-items: flex-start;
  }
  &__avatar{
    width: 50px;
    height: 50px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    background: $pinkMain;
  }
  &__feed-item{
    display: flex;
    margin-bottom: 20px;
  }
  &__feed-text{
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    background: #fdfdfd;
  }
  &__feed-info{
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid #efefef;
    p{
      margin: 0 15px 0 0;
      font-weight: 700;
      color: #64707d;
    }
    span{
      margin: 0 15px 0 0;
      font-weight: 700;
      color: #cccccc;
    }
    time{
      font-size: 13px;
      color: #9a9a9a;
    }
  }
}
</style>