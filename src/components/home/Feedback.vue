<template>
  <div class="feedback" :class="{'animation-enabled': scrollEnable}" ref="feedback">
    <div class="container">
      <h2 class="feedback__heading text-center">
        Обратная связь
      </h2>
      <p class="feedback__subheading text-center">
        Если у Вас есть вопросы или пожелания, можете присылать их нам. Каждый голос будет услышан!
      </p>
      <div class="row">
        <div class="col-12 col-md-4 feedback__image-block d-none d-sm-none d-md-block">
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
              >
                <b-form-input 
                  id="input-1" 
                  @change="$v.form.name.$touch()" 
                  v-model="$v.form.name.$model" 
                  :state="validateState('name')" 
                  autocomplete="off" 
                  aria-describedby="input-1-live-feedback" 
                  maxlength="35"
                  trim
                ></b-form-input>
                <b-form-invalid-feedback id="input-1">Это обязательное поле и должно состалять не менее 3 символов.</b-form-invalid-feedback>
              </b-form-group>
            </div>
            <div class="col-md-6">
              <b-form-group
                id="fieldset-2"
                label="Выберите тему"
                label-for="input-2"
                valid-feedback="Готово!"
              >
                <b-form-select 
                  id="input-2" 
                  v-model="$v.form.category.$model" 
                  :state="validateState('category')" 
                  :options="categoryOptions"
                ></b-form-select>
                <b-form-invalid-feedback id="input-2">Это обязательное поле и должно состалять не менее 3 символов.</b-form-invalid-feedback>
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
                maxlength="35"
              >
                <b-form-input id="input-3" v-model="$v.form.email.$model" :state="validateState('email')" autocomplete="off" trim></b-form-input>
                <b-form-invalid-feedback id="input-3">Это обязательное поле и должно быть корректно заполнено.</b-form-invalid-feedback>
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
                  v-model="form.messageText"
                  :placeholder="textareaPlaceholderDummy"
                  :plaintext="allowTextarea"
                  valid-feedback="Thank you!"
                  :state="messageTextValidation"
                  maxlength="500"
                ></b-form-textarea>
                <b-form-invalid-feedback id="input-4" v-if="!allowTextarea">Количество символов не должно быть меньше 10.</b-form-invalid-feedback>
              </b-form-group>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <b-button class="feedback__submit-btn" :disabled="submitButtonStatus">Отправить</b-button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Feedback",
  data(){
    return{
      form:{
        name: '',
        category: '',
        email: '',
        messageText: ''
      },
      categoryOptions: [
        { value: "advertisement", text: "Реклама"},
        { value: "cooperation", text: "Сотрудничество"},
        { value: "site_suggestions", text: "Предложения по сайту" },
        { value: "review", text: "Отзыв"},
        { value: "other", text: "Другое"}
      ],
      scrollEnable: false,
      scrollPos: null
    }
  },
  validations: {
    form:{
      name: {
        required,
        minLength: minLength(3)
      },
      category: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods:{
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    handleScroll(){
      if(window.scrollY - this.scrollPos > -100){
        this.scrollEnable = true;
      }
    }
  },
  computed: {
    allowTextarea(){
      let emtpyFields = (!!this.form.name && !!this.form.category && !!this.form.email);
      return (!this.$v.form.$anyError && emtpyFields) ? false : true
    },
    textareaPlaceholderDummy(){
      let emtpyFields = (!!this.form.name && !!this.form.category && !!this.form.email);
      return emtpyFields && !this.$v.form.$anyError ? '' : 'Заполните предыдущие поля пожалуйста.'
    },
    submitButtonStatus(){
      let emtpyFields = (!!this.form.name && !!this.form.category && !!this.form.email && this.form.messageText.length > 10);
      return (!this.$v.form.$anyError && emtpyFields) ? false : true
    },
    messageTextValidation() {
      return this.form.messageText.length > 10
    }
  },
  mounted(){
    const top = this.$refs.feedback.offsetTop;
    this.scrollPos = top;
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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
    opacity: 0;
    img{
      width: 80%;
      height: auto;
    }
  }
  &__form{
    opacity: 0;
  }
  textarea.form-control-plaintext{
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    background: #f9f9f9;
  }
  &__submit-btn{
    border: none!important;
    background-color: $pinkMain!important;
    @media (max-width: map-get($grid-breakpoints, md)) {
      width: 100%;
      display: block;
    }
  }
  &.animation-enabled{
    .feedback__image-block{
      animation: fadeInFeedbackImageBlock .5s;
      animation-fill-mode: forwards;
      @keyframes fadeInFeedbackImageBlock {
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
    .feedback__form{
      animation: fadeInFeedbackForm .5s;
      animation-fill-mode: forwards;
      @keyframes fadeInFeedbackForm {
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