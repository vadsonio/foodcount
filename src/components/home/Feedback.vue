<template>
  <div class="feedback">
    <div class="container">
      <h2 class="feedback__heading text-center">
        Обратная связь
      </h2>
      <p class="feedback__subheading text-center">
        Если у Вас есть вопросы или пожелания, можете присылать их нам. Каждый голос будет услышан!
      </p>
      <div class="row">
        <div class="col-12 col-md-4 feedback__image-block">
          <img src="../../assets/letter.svg" alt="letter_icon">
        </div>
        <div class="col-12 col-md-8 feedback__form">
          <div class="row">
            <div class="col-md-6">
              <b-form-group
                id="fieldset-1"
                label="Введите имя/никнейм"
                label-for="input-1"
                valid-feedback="Готово!"
                :invalid-feedback="invalidNameField"
                :state="nameField"
              >
                <b-form-input id="input-1" v-model="name" :state="nameField" autocomplete="off" trim></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6">
              <b-form-group
                id="fieldset-2"
                label="Выберите тему"
                label-for="input-2"
                valid-feedback="Готово!"
                :invalid-feedback="invalidCategoryField"
                :state="categoryField"
              >
                <b-form-select id="input-2" v-model="category" :state="categoryField" :options="categoryOptions"></b-form-select>
              </b-form-group>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <b-form-group
                id="fieldset-3"
                label="Введите email"
                label-for="input-3"
                valid-feedback="Готово!"
                :invalid-feedback="invalidEmailField"
                :state="emailField"
              >
                <b-form-input id="input-3" v-model="email" :state="emailField" autocomplete="off" trim></b-form-input>
              </b-form-group>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <b-form-group
                id="fieldset-4"
                label="Введите текст сообщения"
                label-for="input-4"
                valid-feedback="Готово!"
              >
                <b-form-textarea
                  id="input-4"
                  rows="3"
                  max-rows="8"
                  v-model="messageText"
                  :placeholder="textareaPlaceholderDummy"
                  :plaintext="!allowTextarea"
                ></b-form-textarea>
              </b-form-group>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <b-button>I am a Button</b-button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data(){
    return{
      name: "",
      category: "",
      categoryOptions: [
        { value: "advertisement", text: "Реклама"},
        { value: "cooperation", text: "Сотрудничество"},
        { value: "site_suggestions", text: "Предложения по сайту" },
        { value: "review", text: "Отзыв"},
        { value: "other", text: "Другое"}
      ],
      email: "",
      messageText: ''
    }
  },
  computed: {
    nameField() {
      return this.name.length >= 3
    },
    categoryField(){
      return this.category !== ""
    },
    emailField(){
      let reg = /\S+@\S+\.\S+/;
      return reg.test(this.email);
    },
    invalidNameField() {
      if (this.name.length > 0) {
        return 'Введите минимум 3 знака.'
      }
      return 'Поле не должно быть пустым.'
    },
    invalidCategoryField() {
      if (this.category == "") {
        return 'Выберите подходящую тему.'
      }
      return 'Поле не должно быть пустым.'
    },
    invalidEmailField(){
      let reg = /\S+@\S+\.\S+/;
      if (reg.test(this.email)!== true) {
        return 'Введите правильный формат email.'
      }
      return 'Поле не должно быть пустым.'
    },
    allowTextarea(){
      return (this.nameField && this.categoryField && this.emailField) ? true : false
    },
    textareaPlaceholderDummy(){
      return (!this.nameField && !this.categoryField && !this.emailField) ? 'Для того чтобы оставить сообщение, заполните предыдущие поля...' : ''
    }
  }
}
</script>

<style lang="scss">
.feedback{
  padding: 60px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);
  &__heading{
    margin-bottom: 10px;
  }
  &__subheading{
    margin-bottom: 40px;
    font-size: 15px;
    color: #666;
  }
  &__image-block{
    text-align: center;
    img{
      width: 80%;
      height: auto;
    }
  }
  textarea.form-control-plaintext{
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    background: #f9f9f9;
  }
}
</style>